export interface teste {
    RespostaClienteID: number;
    Pergunta1?: string;
    Pergunta2?: string;
    Pergunta3?: string;
    Pergunta4?: string;
    Pergunta5?: string;
    Pergunta6?: string;
    Pergunta7?: string;
    Pergunta8?: string;
    Pergunta9?: string;
    Pergunta10?: string;
}

export interface questionsPart1{
     setor: 1 | 2 | 3 | 4 | 5 | 6;
     setor_outro?: string;
     num_colaboradores: 1 | 2 | 3 | 4 | 5;
     porte: 1 | 2 | 3;
     localizaçao: 1 | 2 | 3 | 4 | 5;
}

export interface questionsPart2{
     aspc_desafiador: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     aspc_desafiador_outro?: string;
     result_programa: 1 | 2 | 3 | 4 | 5;
     result_programa_outro?: string;
}

export interface dimensionPart3{
     pes_cult: boolean | null;
     ert_ope: boolean | null;
     mer_cli: boolean | null;
     dir_fut: boolean | null;
}

export interface questionsDimension{
     pergunta1: 1 | 2 | 3 | 4;
     pergunta2: 1 | 2 | 3 | 4;
     pergunta3: 1 | 2 | 3 | 4;
     pergunta4: 1 | 2 | 3 | 4;
     pergunta5: 1 | 2 | 3 | 4;
     pergunta6: 1 | 2 | 3 | 4;
}

export interface questionsPart4{
     invest: 1 | 2 | 3;
     resp_treinamentos: 1 | 2 | 3 | 4;
     resp_treinamentos_outro: string;
     treinamentos: 1 | 2 | 3;
     inov_aprendizagem: 1 | 2 | 3 | 4 | 5;
     colab_desenvolvimento: 1 | 2 | 3 | 4 | 5;
     soft_desenvolvimento: 1 | 2 | 3 | 4 | 5;
     cult_art_hobby: 1 | 2 | 3 | 4 | 5;
     empresa_impacto: 1 | 2 | 3 | 4 | 5;
     implement_projeto: boolean;
     tempo_treinamento: 1 | 2 | 3;
}