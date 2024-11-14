import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, ValidationError } from '@formspree/react'
import { CustomAnchor } from './CustomAnchor'
import {
    Container,
    ContactContainer,
    Icon,
    Wrapper,
    TitleContainer,
    Title,
    TextContainer,
    Text,
    Input,
    Label,
    TextArea,
    Form,
    WrapperRow,
    WrapperInputs,
    WrapperTextArea,
    ButtonContainer,
    Button,
    Divider,
    FeedbackMessage,
} from './styles'
import { letterImg, linkedinImg, phoneImg } from '@/assets'

export function Contact() {

    const { t } = useTranslation()

    const [state, handleSubmit, reset] = useForm('myzyjnrn')
    // if (state.succeeded) {
    //   return <div>Thank you for signing up!</div>
    // }

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    })

    // const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     console.log('Dados do formulário:', formData)
    // }

    return (
        <Container>
            <ContactContainer>
                <TitleContainer>
                    <Title>{t('contactMe')}</Title>
                </TitleContainer>
                <TextContainer>
                    <Text>{t('contactMeContent')}</Text>
                </TextContainer>

                <Wrapper>
                    <CustomAnchor
                        href='https://wa.me/5521975606376'
                        target='_blank'
                        label='+55 21 97560-6376'
                    >
                        <Icon src={phoneImg} />
                    </CustomAnchor>

                    <CustomAnchor
                        href='mailto: mmrosatab@gmail.com'
                        target='_blank'
                        label='mmrosatab@gmail.com'
                    >
                        <Icon src={letterImg} />
                    </CustomAnchor>

                    <CustomAnchor
                        href='https://www.linkedin.com/in/mmrosatab/'
                        target='_blank'
                        label='linkedin.com/in/mmrosatab'
                    >
                        <Icon src={linkedinImg} />
                    </CustomAnchor>
                </Wrapper>

                <Divider />

                <Form onSubmit={handleSubmit}>
                    <WrapperRow>
                        <WrapperInputs>
                            <Label htmlFor='name'>{t('name')}</Label>
                            <Input
                                type='text'
                                name='name'
                                id='name'
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </WrapperInputs>

                        <WrapperInputs>
                            <Label htmlFor='email'>E-mail</Label>
                            <Input
                                type='email'
                                name='email'
                                id='email'
                                defaultValue='test@example.com'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </WrapperInputs>
                    </WrapperRow>

                    <WrapperRow>
                        <WrapperTextArea>
                            <Label htmlFor='message'>{t('message')}</Label>
                            <TextArea
                                id='message'
                                name='message'
                                value={formData.mensagem}
                                onChange={handleChange}
                                required
                            />
                        </WrapperTextArea>
                    </WrapperRow>
                    <FeedbackMessage status={'sucess'}>
                        Todos os campos devem ser preenchidos
                    </FeedbackMessage>
                    <WrapperRow>
                        <ButtonContainer>
                            <Button
                                type='submit'
                            >
                                {t('send')}
                            </Button>
                        </ButtonContainer>
                    </WrapperRow>
                </Form>
            </ContactContainer>
        </Container>
    )
}