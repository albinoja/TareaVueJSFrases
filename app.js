const { createApp, ref } = Vue;

const fases_originales = [
  {
    frase: "La simplicidad es el alma de la eficiencia.",
    autor: "Andrew Hunt y David Thomas",
  },
  {
    frase:
      "Los programas deben escribirse para que las personas los lean, y solo de manera incidental para que las máquinas los ejecuten.",
    autor: "Harold Abelson y Gerald Jay Sussman",
  },
  {
    frase:
      "Depurar es el doble de difícil que escribir el código en primer lugar. Por lo tanto, si escribes el código de la manera más inteligente posible, por definición, no eres lo suficientemente inteligente como para depurarlo.",
    autor: "Brian Kernighan y P.J. Plauger",
  },
  {
    frase: "La única manera de ir rápido es hacerlo bien.",
    autor: "Robert C. Martin",
  },
  {
    frase: "Primero, resuelve el problema. Luego, escribe el código.",
    autor: "Steve McConnell",
  },
];

const App = createApp({
  setup() {
    const frases = ref(fases_originales);
    const nuevaFrase = ref("");
    const nuevoAutor = ref("");
    const msg = ref("");
    const msgEdit = ref("");
    const msgTipoEdit = ref("");
    const msgTipo = ref("");
    const fraseEditada = ref({ frase: "", autor: "" });
    const indiceEditado = ref(null);

    const agregarFrase = () => {
      if (nuevaFrase.value.trim() && nuevoAutor.value.trim()) {
        frases.value.push({
          frase: nuevaFrase.value,
          autor: nuevoAutor.value,
        });
        nuevaFrase.value = "";
        nuevoAutor.value = "";
        msg.value = "Frase agregada correctamente al final";
        msgTipo.value = "alert alert-success";
      } else {
        msg.value = "Ingrese todos los datos";
        msgTipo.value = "alert alert-danger";
      }
    };

    const agregarFraseAlInicio = () => {
      if (nuevaFrase.value.trim() && nuevoAutor.value.trim()) {
        frases.value.unshift({
          frase: nuevaFrase.value,
          autor: nuevoAutor.value,
        });
        nuevaFrase.value = "";
        nuevoAutor.value = "";
        msg.value = "Frase agregada correctamente al inicio";
        msgTipo.value = "alert alert-success";
      } else {
        msg.value = "Ingrese todos los datos";
        msgTipo.value = "alert alert-danger";
      }
    };

    const agregarFraseAleatoriamente = () => {
      const frasesAleatorias = [
        "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "La paz no es solo la ausencia de guerra, es una forma de vida.",
        "La vida es un desafío constante; el éxito depende de nuestra perseverancia.",
        "El verdadero progreso es el que pone la tecnología al alcance de todos.",
        "La justicia no se trata solo de castigar a los culpables, sino de proteger a los inocentes.",
        "La política no se hace con buenas intenciones, se hace con capacidad y con coraje.",
        "Los pueblos no se liberan de la noche a la mañana, pero se liberan con trabajo y con firmeza.",
        "La lucha por la justicia social no es un capricho, es una necesidad histórica.",
        "No hay verdadera democracia sin igualdad, y no hay igualdad sin justicia.",
        "El cambio verdadero comienza con la conciencia y la acción de cada uno de nosotros.",
      ];
      const autoresAleatorios = [
        "Óscar Romero",
        "Salvador Allende",
        "Rafael Arévalo Martínez",
        "Claribel Alegría",
        "Manuel Salazar",
        "Dagoberto Gutiérrez",
        "Dagoberto Gutiérrez",
        "Dagoberto Gutiérrez",
        "Dagoberto Gutiérrez",
        "Dagoberto Gutiérrez",
      ];
      const randomIndex = Math.floor(Math.random() * frasesAleatorias.length);
      frases.value.push({
        frase: frasesAleatorias[randomIndex],
        autor: autoresAleatorios[randomIndex],
      });
      msg.value = "Frase aleatoria agregada correctamente";
      msgTipo.value = "alert alert-success";
    };

    const reiniciarFrases = () => {
      frases.value = [];
      msg.value = "Reiniciado correctamente";
      msgTipo.value = "alert alert-success";
    };

    const eliminarFrase = (index) => {
      frases.value.splice(index, 1);
      msg.value = "Eliminado correctamente";
      msgTipo.value = "alert alert-success";
    };

    const editarFrase = (index) => {
      fraseEditada.value = { ...frases.value[index] };
      indiceEditado.value = index;
      const myModal = new bootstrap.Modal(document.getElementById("editModal"));
      myModal.show();
    };

    const guardarCambios = () => {
      if (fraseEditada.value.frase.trim() && fraseEditada.value.autor.trim()) {
        frases.value[indiceEditado.value] = { ...fraseEditada.value };
        const myModalEl = document.getElementById("editModal");
        const myModal = bootstrap.Modal.getInstance(myModalEl);
        myModal.hide();
        msg.value = "Modificado correctamente";
        msgTipo.value = "alert alert-success";
      } else {
        msgEdit.value = "Ingrese todos los datos";
        msgTipoEdit.value = "alert alert-danger";
      }
    };

    return {
      frases,
      nuevaFrase,
      nuevoAutor,
      agregarFrase,
      agregarFraseAlInicio,
      agregarFraseAleatoriamente,
      reiniciarFrases,
      eliminarFrase,
      editarFrase,
      fraseEditada,
      guardarCambios,
      msg,
      msgTipo,
      msgEdit,
      msgTipoEdit,
    };
  },
});

App.mount("#myapp");
