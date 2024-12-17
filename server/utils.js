import * as EmailValidator from 'email-validator'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import domains from 'disposable-email-domains' assert { type: 'json' }
import wildcards from 'disposable-email-domains/wildcard.json' assert { type: 'json' }
import firebase from './firebase.js'

const db = getFirestore(firebase)

export const isDisposableEmail = async (email) => {
  const domain = email.split('@')[1]
  if (domains.includes(domain) || wildcards.includes(domain)) {
    return true
  }

  const tempDomainRef = doc(db, 'temp_domains', domain)
  const tempDomainSnap = await getDoc(tempDomainRef)

  if (tempDomainSnap.exists()) {
    return true
  }

  return false
}

export const isValidEmail = (email) => {
  return EmailValidator.validate(email)
}
