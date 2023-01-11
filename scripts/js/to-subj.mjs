import debug from 'debug'

const log = debug('@sequencemedia/certificates')

log('`toSubj` is awake')

export default function toSubj ({
  country,
  state,
  locality,
  organisation,
  commonName,
  emailAddress
}) {
  return `/C=${country}/ST=${state}/L=${locality}/O=${organisation}/CN=${commonName}/emailAddress=${emailAddress}`
}
