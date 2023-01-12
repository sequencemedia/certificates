import debug from 'debug'
import nconf from 'nconf'

const log = debug('@sequencemedia/certificates')
const error = debug('@sequencemedia/certificates:error')

log('`config` is awake')

try {
  nconf
    .argv()
    .file({
      file: nconf.get('file') || 'certificates.json'
    })
    .required([
      'country',
      'state',
      'locality',
      'organisation',
      'commonName',
      'emailAddress'
    ])
} catch ({
  message = 'N/A'
}) {
  error(message)

  process.exit(1)
}

export default nconf.get()
