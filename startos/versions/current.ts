import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.16:3',
  releaseNotes: {
    en_US:
      '- Connection Details names each address by what it is (LAN IPv4, local name, tunnel IPv4, public IPv4, domain) and says where to use it from, instead of numbering them.',
    es_ES:
      '- Datos de conexión nombra cada dirección según lo que es (IPv4 de la LAN, nombre local, IPv4 del túnel, IPv4 pública, dominio) e indica desde dónde usarla, en lugar de numerarlas.',
    de_DE:
      '- Verbindungsdaten benennt jede Adresse nach dem, was sie ist (LAN-IPv4, lokaler Name, Tunnel-IPv4, öffentliche IPv4, Domain) und sagt, von wo sie zu verwenden ist, statt sie zu nummerieren.',
    pl_PL:
      '- Dane połączenia nazywają każdy adres według tego, czym jest (IPv4 w sieci LAN, nazwa lokalna, IPv4 tunelu, publiczny IPv4, domena) i mówią, skąd go używać, zamiast je numerować.',
    fr_FR:
      '- Détails de connexion nomme chaque adresse selon ce qu’elle est (IPv4 du réseau local, nom local, IPv4 du tunnel, IPv4 publique, domaine) et indique d’où l’utiliser, au lieu de les numéroter.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
