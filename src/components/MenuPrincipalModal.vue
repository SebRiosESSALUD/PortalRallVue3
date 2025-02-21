<template>
    <div v-if="show" class="modal fade show d-block" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          
          <div class="modal-body" id="modalesPrincipales">
            <!-- Contenido del modal de transparencia -->
            
            <!-- Fila Asistenciales -->
            <div class="row" id="filaFormatos">
              <h3 style="background-color: #3264a8; 
                border-radius: 10px; 
                color: white;" 
                > 
                
              Asistenciales</h3>
              <div class="col">
                <a href="http://10.15.4.30:8080/rall2/atencionprimaria.html" 
                  target="_blank"
                  >
                  Atención Primaria</a>
              </div>
              <div class="col">
                <a href="http://oasprod.essalud.gob.pe:7777/acreditap/"
                    target="_blank"> 
                  Acredita</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/NdWNEGZFDB3ygE5"
                    target="_blank">
                  Firma Digital</a>
              </div>
              <div class="col">
                <a href="http://sgss.essalud/sgss/servlet/hmain" 
                    target="_blank">
                  SGSS - ESSI</a>
              </div>
              <div class="col">
                <a href="http://infocal.essalud/" 
                    target="_blank">
                  Infocal</a>
              </div>
              <div class="col">
                <a href="http://sigi.essalud:8080/cittcontrol/" 
                    target="_blank">
                  SIGI</a>
              </div>
              <div class="col">
                <a href="http://anatpat.essalud/ANATPAT/" 
                target="_blank">
                  Anapat</a>
              </div>
              <div class="col">
                <a href="http://10.0.0.218/" 
                target="_blank">
                  Violencia Familiar</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/qAa578RzBFf3znE#pdfviewer" 
                target="_blank" >
                  Directiva CITT</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/PS5KEHqdnfHEy48#pdfviewer" 
                target="_blank">
                  Glosario Estadístico 2022</a>
              </div>
              <div class="col">
                <a href="http://oasprod.essalud.gob.pe:7777/Referencia/servlet/Index" 
                target="_blank">
                  Referencias</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/xS7A2L6MBTMoNxo#pdfviewer" 
                target="_blank">
                  Estándares CIE 10</a>
              </div>
            </div>
  
            <!-- Fila Administrativos -->
            <div class="row" id="filaFormatos">
              <h3 style="background-color: #3264a8; border-radius: 10px; color: white;" >
                Administrativos</h3>
              <div class="col">
                <a href="https://sgd.essalud.gob.pe"
                target="_blank" >
                SGD</a>
              </div>
              <div class="col">
                <a href="http://sgfa.essalud/" 
                target="_blank" >
                  SIAD</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/login" 
                target="_blank">
                  Nube/Cloud</a>
              </div>
              <div class="col">
                <a href="http://intranet.essalud/portal/modules/news/" 
                target="_blank">
                  Intranet</a>
              </div>
              <div class="col">
                <a href="https://mpv.essalud.gob.pe/Login/Index" 
                target="_blank">
                  Mesa de Partes Digital</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.30:8080/scai/" 
                target="_blank">
                  SCAI</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.180:8080/privado/" 
                target="_blank">
                  Soporte Informático</a>
              </div>
            </div>

            <!-- Fila Recursos Humanos -->
            <div class="row" id="filaFormatos">
              <h3 style="background-color: #3264a8; border-radius: 10px; color: white;" >
                Recursos Humanos</h3>
              <div class="col">
                <a href="http://10.15.4.30:8080/sgper2/" 
                target="_blank">
                  Boletas de Pago</a>
              </div>
              <div class="col">
                <a href="http://10.56.1.114:7777/ficha/paginas/formularios_de_personal/ingreso.html" 
                target="_blank">
                  Fichas Única de Personal</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/LydDXrLkqgoak99" 
                target="_blank">
                  Video Tutoriales</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/py4BptdZ78iCNMX" 
                target="_blank">
                  Documentos de Gestión</a>
              </div>
            </div>

            <!-- Fila ingerior soporte informatico -->
            <div class="row" id="filaFormatos">
              <h3 style="background-color: #3264a8; border-radius: 10px; color: white;" >
                Calidad</h3>
              <div class="col">
                <a href="http://supernova.essalud:8080/reginciad/index.html" 
                target="_blank">
                  Regincidad</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/MTGK6dgHt5s7Hwj?path=%2FDIRECTIVAS" 
                target="_blank">
                Directivas</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/MTGK6dgHt5s7Hwj?path=%2FGESTI%C3%93N%20POR%20PROCESOS"
                target="_blank">
                  Gestión por Procesos</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/MTGK6dgHt5s7Hwj?path=%2FINFORMES%20ANUALES" 
                target="_blank">
                  Informes Anuales</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/MTGK6dgHt5s7Hwj?path=%2FCONTROL%20INTERNO" 
                target="_blank">
                  Control Interno</a>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/MTGK6dgHt5s7Hwj?path=%2FGESTI%C3%93N%20DE%20LA%20CALIDAD"
                target="_blank">
                  Gestión de la Calidad</a>
              </div>
              <div class="col">
                <div href="http://10.15.4.25/cloud/index.php/s/MTGK6dgHt5s7Hwj?path=%2FIETSI" 
                target="_blank">
                  <a href="">
                    IETSI</a>
                </div>
              </div>
              <div class="col">
                <a href="http://10.15.4.25/cloud/index.php/s/MTGK6dgHt5s7Hwj?path=%2FOBSERVACIONES%20SUSALUD" 
                target="_blank">
                  Observaciones ESSALUD</a>
              </div>  
            </div>

            <!-- Fila Contingencias -->
            <div class="row" id="filaFormatos">
              <h3 style="background-color: #3264a8; border-radius: 10px; color: white;" >
                Contingencias</h3>
              <div class="col">
                <a href="http://172.20.0.122:8080/cittcontrol/" 
                target="_blank">
                  SIGI</a>
              </div>
              <div class="col">
                <a href="http://10.56.1.114:7777/Referencia/html/index.html" 
                target="_blank">
                  Referencias</a>
              </div>
              <div class="col">
                <a href="http://10.56.1.158/sgss/servlet/hmain" 
                target="_blank">
                  SGSS</a>
              </div>
              <div class="col">
                <a href="http://10.0.0.217/" 
                target="_blank">
                  Sin Anemia - Contingencias</a>
              </div>
              <div class="col">
                <a href="http://10.56.1.114:7777/perinat/" 
                target="_blank">
                  Vigilancia Perinatal - SVP</a>
              </div>
              <div class="col">
                <a href="http://10.56.1.114:7777/acreditap/" 
                target="_blank">
                  Acreditación Intranet</a>
              </div>
              <div class="col">
                <a href="http://10.0.0.213/ANATPAT/" 
                target="_blank">
                  Anapat</a>
              </div>
              <div class="col">
                <a href="http://172.20.0.120/POSTAS/" 
                target="_blank">
                  Inmunizaciones - SISCAP</a>
              </div>
              <div class="col">
                <a href="http://10.56.1.114:7779/acredita/" 
                target="_blank">
                  Acredita Internet Capcha</a>
              </div>
              <div class="col">
                <a href="http://10.56.1.114:7777/Sistema_Patrimonial_Contable/" 
                target="_blank">
                  Sistema Patrimonial Contable</a>
              </div>
              <div class="col">
                <a href="http://172.20.0.187/" 
                target="_blank" >
                  SIAD</a>
              </div>
              <div class="col">
                <a href="http://172.20.0.140/" 
                target="_blank" >
                  Infocal</a>
              </div>
              <div class="col">
                <a href="http://10.56.1.127:9087/sgssqa/servlet/hmain" 
                target="_blank" >
                  SGSS Pruebas</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue';
  
  defineProps({
    show: Boolean
  });
  
  const emit = defineEmits(['close']);
  
  // Función para cerrar el modal al hacer clic fuera
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal')) {
      emit('close');
    }
  };
  
  // Función para cerrar el modal al presionar la tecla Escape
  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      emit('close');
    }
  };
  
  onMounted(() => {
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
  });
  
  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('keydown', handleEscapeKey);
  });
  </script>
  
  <style>

  .col a {
    color: black;
    text-decoration: none;
    transition: 0.3s ease;
  }

  .col a:hover {
    color: blue;
    font-size: 120%;
  }

  .modal.show {
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .list-group {
    max-height: 400px;
    overflow-y: auto;
  }
  
  #filaFormatos {
  margin: 20px;
  }

  #enlaceModalFormatos {
    color: black;
    text-decoration: none;
    transition: color 0.3s ease,  0.3s ease;
  }

  #enlaceModalFormatos:hover {
    color: blue;
    font-size: 110%;
  }
  
  </style>