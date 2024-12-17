import domains from 'disposable-email-domains' assert { type: 'json' }
import wildcards from 'disposable-email-domains/wildcard.json' assert { type: 'json' }
import * as EmailValidator from 'email-validator'

export const isDisposableEmail = (email) => {
  const domain = email.split('@')[1]
  return domains.includes(domain) || wildcards.includes(domain)
}

export const isValidEmail = (email) => {
  return EmailValidator.validate(email)
}
