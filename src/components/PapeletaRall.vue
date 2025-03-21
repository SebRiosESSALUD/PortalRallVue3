<script>
import { ref } from "vue";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.addVirtualFileSystem(pdfFonts);

export default {
  mounted() {
        // Carga el archivo JSON desde la carpeta public
        fetch("./hospitalesPapeleta.json")
          .then(response => response.json())
          .then(data => {
            this.hospitales = data;
          })
          .catch(error => {
            console.error("Error al obtener hospitales:", error);
          });
      },

  data() {
    return {
      hospitales: [],
      formData: {
        planilla: '',
        jefePersonal: '',
        nombre: '',
        servicio: '',
        permisoPor: '',
        fechaInicio: '',
        fechaFin: '',
        motivo: '',
        fecha: '',
        sinGoce: false,
        vacaciones: false,
        sinDescuentos: [
          { label: 'Por enfermedad', checked: false },
          { label: 'Por capacitación', checked: false },
          { label: 'Por fallecimiento de familiares', checked: false },
          { label: 'Permiso particular', checked: false },
          { label: 'Permiso personal', checked: false },
          { label: 'Por onomástico', checked: false },
          { label: 'Por compensación', checked: false },
          { label: 'Por comisión de servicios', checked: false }
        ],
        salida: '',
        regreso: '',
        observaciones: ''
      },
    };
  },
  methods: {
    //Cosas del componente como tal
    focusDate(refName) {
      const dateInput = this.$refs[refName];
      if (dateInput) {
        // 1) Hacer focus en el input
        dateInput.focus();

        // 2) Forzar la apertura del date picker (solo funciona en navegadores que soportan showPicker)
        if (typeof dateInput.showPicker === 'function') {
          dateInput.showPicker();
        }
      }
    },

    formatDate(dateString) {
      if (!dateString) return '';
      const d = new Date(dateString + 'T00:00:00');
      const day = ('0' + d.getDate()).slice(-2);
      const month = ('0' + (d.getMonth() + 1)).slice(-2);
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    },

    filterPlanilla(event) {
      let value = event.target.value;
      value = value.replace(/\D/g, '');
      if (value.length > 5) {
        value = value.slice(0, 5);
      }
      event.target.value = value;
      this.formData.planilla = value;
    },

    //Cosas del pdf make
    exportPDF() {

      var hospitalName = document.getElementById('hospitalSelector').value;

      const formattedFechaInicio = this.formatDate(this.formData.fechaInicio);
      const formattedFechaFin = this.formatDate(this.formData.fechaFin);
      const formattedFecha = this.formatDate(this.formData.fecha);
      const formattedSalida = this.formatDate(this.formData.salida);
      const formattedRegreso = this.formatDate(this.formData.regreso);

      var docDefinition = {
        pageSize: 'A4',
        pageMargins: [40, 60, 40, 0],
        images: {
          // Aquí es donde cargarás el código Base64 manualmente
          logo: 'data:image/jpeg;base64,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'
        },

        header: {
            columns: [
              { image: 'logo', // Referencia a la imagen en el diccionario 'images'
                width: 150, margin: [10, 10, 0, 10]        
              },
              { text: 'RED ASISTENCIAL LA LIBERTAD', margin: [0, 30, 0, 0] , style: 'title' },
            ],
            columnGap: 30
          },

          content: [
            {
              stack: [
                { text: 'PAPELETA DE AUTORIZACION DE SALIDA'},
                { text: hospitalName, style: 'subheader'},
              ],
              margin: [20, 10, 20, 0],
              style: 'header'
            },  
            {
                  text: [
                  'CÓDIGO DE PLANILLA: ', {text: this.formData.planilla, style: 'data'},
              ],
              margin: [0, 5, 0, 0],
              alignment: 'right'
            },
                /*PARTE 1*/
            {
                  text: [
                  'SEÑOR(A) JEFE/COORDINADOR DE PERSONAL : ', {text: this.formData.jefePersonal, style: 'data'},
                  '\n\nDon(ña):    ',{text: this.formData.nombre, style: 'data'},
                  {text: '   QUIEN PRESTA SERVICIOS en :   ' },{text: this.formData.servicio, style: 'data'},
                  '   A ÓRDENES DIRECTAS DEL SUSCRITO, SOLICITA PERMISO POR :   ',{text: this.formData.permisoPor, style: 'data'},'.',
                  '\n\nA PARTIR DE:   ',{text: formattedFechaInicio, style: 'data'},' HASTA  ' ,{text: formattedFechaFin, style: 'data'},'.   ASUNTOS MOTIVADOS POR:  '
                  ,'\n',{text: this.formData.motivo, style: 'data'},'.',
              ],
              margin: [0, 20, 0, 0],
              alignment: 'justify'
            },
            /*PARTE 1*/
            {
              style: 'tableExample',
              table: {
                heights: function (row) {
                  return (row + 0) * 80;
                },
                widths: [250, 250 ],
                body: [
                  [{text: 'FIRMA DEL JEFE INMEDIATO', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'FIRMA DEL SOLICITANTE', style: 'tableHeader', alignment: 'center',bold: true}],
                  ['', '']
                ]
              },
              margin: [0, 10, 0, 0],
              alignment: 'center',
              layout: {
                fillColor: function (rowIndex, node, columnIndex) {
                  return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
                }
              }
            },
                    /*PARTE 1*/
            {
                  text: [
                  'Trujillo : ', {text: formattedFecha, style: 'data'},
              ],
              margin: [0, 5, 0, 0],
              alignment: 'right'
            },

            /*PARTE 3*/
            {text: '\n\nCONTROL DE CALIFICACIÓN:',bold:'true',margin: [0, -30, 0, 0],},
            {
            ul: [/*
            'item 1',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',*/
            {
              ol: [
                  `Sin goce de haber - Permiso Particular (${this.formData.sinGoce ? 'X' : ' '})`,
                  `A cuenta de vacaciones - Permiso Personal (${this.formData.vacaciones ? 'X' : ' '})`,
                  
                [
                  {
                    columns: [
                      {
                        stack: [
                          'Sin descuentos: ',
                          {
                            ul: [
                              `Por enfermedad (${this.formData.sinDescuentos[0].checked ? 'X' : ' '})`,
                              `Por capacitación (${this.formData.sinDescuentos[1].checked ? 'X' : ' '})`,
                              `Por fallecimiento de familiar directo (${this.formData.sinDescuentos[2].checked ? 'X' : ' '})`
                                
                            ]
                          }
                        ]
                      },
                      {
                        stack: [
                          '\n',
                          {
                            ul: [
                              `Por onomástico (${this.formData.sinDescuentos[3].checked ? 'X' : ' '})`,
                              `Por compensación (${this.formData.sinDescuentos[4].checked ? 'X' : ' '})`,
                              `Por comisión de servicios (${this.formData.sinDescuentos[5].checked ? 'X' : ' '})`
                            ]
                          }
                                ]
                      },
                  
                                ]
                  },
                
                ],
                
                  ],margin: [0, 5, 0, 0],
            },

              ]
        },
            
          
        /*PARTE 4

        {
              text: [
                'SALIÓ: ',{text: formattedSalida, style: 'data'},'.\n',
                'REGRESÓ: ',{text: formattedRegreso, style: 'data'},'.\n\n',
                'OBSERVACIONES: ',{text: this.formData.observaciones, style: 'data'},'.\n',
              ],
              margin: [0, 10, 0, 0],
              alignment: 'justify'
          },*/

          {
          style: 'tableExample2',
          table: {
            body: [
              ['SALIDA', {text: formattedSalida, style: 'data'} ],
              ['RETORNO', {text: formattedRegreso, style: 'data'}]
            ],
          },
          margin: [0,10, 0, 0],
        },
        {
              text: [
                'OBSERVACIONES: ',{text: this.formData.observaciones, style: 'data'},'.\n',
              ],
              margin: [0, 10, 0, 0],
              alignment: 'justify'
          },
          /*PARTE 5*/
          {
            table: {
              widths: [250],
              body: [
                [
                  {
                    text: 'JEFE DE PERSONAL',
                    alignment: 'center',
                    bold: true,
                    fillColor: '#CCCCCC'
                  }
                ],
                [
                  {
                    text: '\n\n', 
                    margin: [0, 25, 0, 25]
                  }
                ]
              ]
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1
            },
            alignment: 'center',
            margin: [140, 20, 0, 0] 
          }


        ],
      styles: {
          header: {
            fontSize: 18,
            bold: true,
            alignment: 'center',
          },
          subheader: {
            fontSize: 16,
            bold: true,
            alignment: 'center',
          },
          title: {
            fontSize: 14,
            bold: true,
            color: '#128ffd',
            alignment: 'center',
          },
          data: {
            fontSize: 15,
            bold: true,
            italics: true,
            decoration: 'underline',
          },
          defaultStyle: {
            fontSize: 15,
            bold: false
          },
          sectionHeader: {
            fontSize: 12,
            bold: true,
          },/*
          footer: {
            fontSize: 9,
            alignment: 'left'
          }*/
            }
              };

                const pdf = pdfMake.createPdf(docDefinition);
                pdf.open(); // Abre el PDF en una nueva ventana
          },
      }
    };
</script>

<template>
  <div class="form-container" style="margin-bottom: 70px;">
    <!-- Formulario de entrada con fondo blanco y bordes -->
    <div id="formularioSalida" class="p-4 border rounded">
      <div class="text-center">
        <img src="/public/logo-main.png" alt="Logo EsSalud" class="logo" />
        <h4 class="titulo">PAPELETA DE AUTORIZACIÓN DE SALIDA</h4>
      </div>

      <div class="mb-3">
        <label class="form-label">Hospital</label>
        <select class="form-select" id="hospitalSelector">
          <option style="color: #bfbfbf;" value="" disabled selected>Seleccione su hospital correcto</option>
          <option v-for="(hospital, index) in hospitales" :key="index" :value="hospital.value">
            {{ hospital.nombre }}
          </option>

        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Código de Planilla:</label>
        <input v-model="formData.planilla" type="text" class="form-control" @input="filterPlanilla"/>
      </div>
      
      <div class="mb-3">
        <label class="form-label">Sr Jefe de Personal:</label>
        <input v-model="formData.jefePersonal" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Don(ña):</label>
        <input v-model="formData.nombre" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Quien presta servicios en:</label>
        <input v-model="formData.servicio" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">A órdenes del suscrito, solicita permiso por:</label>
        <input v-model="formData.permisoPor" type="text" class="form-control" />
      </div>
      <div class="row mb-3 d-flex">
        <div class="col date-wrapper" @click="focusDate('fechaInicio')">
          <label class="form-label">A partir del:</label>
          <input ref="fechaInicio" v-model="formData.fechaInicio" type="date" class="form-control" />
        </div>
        <div class="col date-wrapper" @click="focusDate('fechaFin')">
          <label class="form-label">Hasta:</label>
          <input ref="fechaFin" v-model="formData.fechaFin" type="date" class="form-control" />
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Por asuntos motivados:</label>
        <textarea v-model="formData.motivo" class="form-control"></textarea>
      </div>
      <div class="mb-3 date-wrapper" @click="focusDate('fecha')">
        <label class="form-label">Fecha:</label>
        <input ref="fecha" v-model="formData.fecha" type="date" class="form-control" />
      </div>
      
      <!-- Sección de control de calificación -->
      <h5>CONTROL DE CALIFICACIÓN:</h5>
      <div class="row">
        <!-- Grupo 1: Opciones independientes -->
        <div class="col-12">
          <div class="mb-3 d-flex align-items-center">
            <div class="me-3">
              <label class="form-label">Sin goce de haber</label>
              <input v-model="formData.sinGoce" type="checkbox" class="form-check-input" />
            </div>
            <div>
              <label class="form-label">Acta de vacaciones</label>
              <input v-model="formData.vacaciones" type="checkbox" class="form-check-input" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Línea divisoria para separar los grupos -->
      <hr class="divisor" />
      
      <!-- Grupo 2: Opciones de Sin descuentos organizadas en columnas -->
      <div class="row">

        <div class="col-md-6">
          <h6 class="sin-desc">Sin descuentos:</h6>
          <div class="mb-3 sin-desc-option" v-for="(item, key) in formData.sinDescuentos.slice(0,4)" :key="key">
            <label class="form-label">{{ item.label }}</label>
            <input v-model="item.checked" type="checkbox" class="form-check-input" />
          </div>
        </div>

        <div class="col-md-6">
          <!-- Se usa un heading invisible para alinear con la columna izquierda -->
          <h6 class="invisible">Sin descuentos:</h6>
          <div class="mb-3 sin-desc-option" v-for="(item, key) in formData.sinDescuentos.slice(4)" :key="key">
            <label class="form-label">{{ item.label }}</label>
            <input v-model="item.checked" type="checkbox" class="form-check-input" />
          </div>
        </div>

      </div>
      
      <div class="mb-3 date-wrapper" @click="focusDate('salida')">
        <label class="form-label">Salida:</label>
        <input ref="salida" v-model="formData.salida" type="date" class="form-control" />
      </div>
      <div class="mb-3 date-wrapper" @click="focusDate('regreso')">
        <label class="form-label">Regreso:</label>
        <input ref="regreso" v-model="formData.regreso" type="date" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Observaciones:</label>
        <textarea v-model="formData.observaciones" class="form-control"></textarea>
      </div>
    </div>

    <!-- Botón para generar PDF -->
    <div class="text-center mt-3">
      <button class="btn btn-primary" v-on:click.prevent="exportPDF">Generar PDF</button>
    </div>
  </div>
</template>


<style scoped>
.titulo {
  margin-top: 20px;
  text-align: center;
}

.form-container { 
  max-width: 700px;
  margin: auto;
  padding: 20px;
}

#formularioSalida {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 150px;
  display: block;
  margin: auto;
}

.form-label {
  font-weight: 500;
  color: #333;
}

.form-control {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.375rem 0.75rem;
}

.btn {
  border-radius: 4px;
}

/* Línea divisoria */
.divisor {
  border-radius: 5px;
  border-top: 4px solid #5c5c5c;
  margin: 20px 0;
}

/* Para el heading de sin descuentos con el mismo tamaño que el grupo superior */
.sin-desc {
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

/* Alineación de cada opción de sin descuentos */
.sin-desc-option {
  display: flex;
  align-items: center;
}
.sin-desc-option .form-label {
  /* Fija un ancho para que todos los labels queden alineados */
  width: 220px;
  margin-bottom: 0;
}

@media (max-width: 576px) {
    .row > div {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

</style>