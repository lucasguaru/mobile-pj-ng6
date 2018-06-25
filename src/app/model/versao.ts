export interface Versao {
    versaoPk: {
        cdVersaoApp: string,
        cdSistemaOperacional: number
    },
    nomeSistemaOperacional?: string,
    habilitada?: boolean
}
