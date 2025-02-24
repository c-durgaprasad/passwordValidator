// Write your code here
import {useState} from 'react'
import {
  BgContainer,
  CardContainer,
  PsHeading,
  PsDesc,
  PsInput,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [validate, setValidate] = useState(
    'Your password must be at least 8 characters',
  )
  const [password, setPassword] = useState('')

  const passwordChange = event => {
    setPassword(event.target.value)
    if (password.length < 8) {
      setValidate('Your password must be at least 8 characters')
    } else {
      setValidate('')
    }
  }

  return (
    <BgContainer>
      <CardContainer>
        <PsHeading>Password Validator</PsHeading>
        <PsDesc>Check how strong and secure is your password</PsDesc>
        <PsInput type="password" onChange={passwordChange} value={password} s />
        <ErrMsg>{validate}</ErrMsg>
      </CardContainer>
    </BgContainer>
  )
}

export default PasswordValidator
