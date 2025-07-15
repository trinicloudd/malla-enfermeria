function mostrarInfo(ramo) {
  const info = {
    BasesBiologicas: "Bases Biológicas - Ciencias Básicas",
    Morfologia: "Morfología - Ciencias Básicas",
    BasesQuimicas: "Bases Químicas - Ciencias Básicas",
    BasesCuidado: "Bases del Cuidado de Enfermería - Disciplinar",
    BasesTeoricas: "Bases Teóricas y Bioética - Disciplinar",
    MatematicaEstadistica: "Bases Matemáticas y Estadísticas - Investigación",
    Fisiologia: "Fisiología Básica - Ciencias Básicas",
    Psicologia: "Psicología de la Salud - Disciplinar",
    EducacionSalud: "Educación para la Salud - Disciplinar",
    Critica: "Lectura Crítica / Pensamiento Crítico - Habilidades Profesionales",
    Cuidados1: "Cuidados de Enfermería del Adulto I - Disciplinar",
    Ingles1: "Inglés Técnico - Habilidades Profesionales"
  };
  const box = document.getElementById("info-box");
  box.innerText = info[ramo] || "Información no disponible";
  box.classList.remove("oculto");
}
