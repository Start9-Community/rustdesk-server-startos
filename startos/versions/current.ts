import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.16:2',
  releaseNotes: {
    en_US:
      '- Connection Details lists each ID server and relay address separately, each with its own copy button.',
    es_ES:
      '- Datos de conexión muestra cada dirección del servidor de ID y del servidor de relé por separado, cada una con su propio botón de copiar.',
    de_DE:
      '- Verbindungsdaten zeigt jede Adresse des ID-Servers und des Relay-Servers einzeln an, jede mit eigener Kopier-Schaltfläche.',
    pl_PL:
      '- Dane połączenia pokazują każdy adres serwera ID i serwera przekaźnika osobno, każdy z własnym przyciskiem kopiowania.',
    fr_FR:
      '- Détails de connexion affiche chaque adresse du serveur d’ID et du serveur de relais séparément, chacune avec son propre bouton de copie.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
