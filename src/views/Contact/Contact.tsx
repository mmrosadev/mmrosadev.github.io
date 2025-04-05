import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { letterImg, linkedinImg, phoneImg } from '@/assets'
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

export interface FeedbackProps {
    message: string,
    status: 'waiting' | 'success' | 'failure',
    error: boolean,
}

export function Contact() {

    const { t } = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [feedback, setFeedback] = useState<FeedbackProps>({
        message: '',
        status: 'waiting',
        error: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })

        setFeedback({ message: '', status: 'waiting', error: false })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { name, email, message } = formData

        if (isFormEmptyOrIncomplete(name, email, message)) {
            setFeedback({
                message: t('fillAllFields'),
                status: 'failure',
                error: true,
            })
        } else if (isEmailInvalid(email)) {
            setFeedback({
                message: t('invalidEmail'),
                status: 'failure',
                error: true,
            })
        } else {

            try {

                await axios.post('https://formspree.io/f/myzyjnrn', {
                    ...formData
                })

                setFeedback({
                    message: t('successSend'),
                    status: 'success',
                    error: false,
                })
            } catch (error) {
                console.log(error)
                setFeedback({
                    message: t('failureSend'),
                    status: 'failure',
                    error: true,
                })
            } finally {
                setFormData({ name: '', email: '', message: '' })
            }

        }
    }

    const isFormEmptyOrIncomplete = (name: string, email: string, message: string) => {
        return (name.length === 0 || email.length === 0 || message.length === 0)
    }

    const isEmailInvalid = (email: string) => {
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return !regexEmail.test(email)
    }

    const isButtonDisabled = () => {
        const { name, email, message } = formData
        return isFormEmptyOrIncomplete(name, email, message) || isEmailInvalid(email)
    }

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
                        href='mailto: mmrosadev@gmail.com'
                        target='_blank'
                        label='mmrosadev@gmail.com'
                    >
                        <Icon src={letterImg} />
                    </CustomAnchor>

                    <CustomAnchor
                        href='https://www.linkedin.com/in/mmrosadev/'
                        target='_blank'
                        label='linkedin.com/in/mmrosadev'
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
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={feedback.error ? 'error' : undefined}
                            />
                        </WrapperInputs>

                        <WrapperInputs>
                            <Label htmlFor='email'>E-mail</Label>
                            <Input
                                type='email'
                                name='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={feedback.error ? 'error' : undefined}
                            />
                        </WrapperInputs>
                    </WrapperRow>

                    <WrapperRow>
                        <WrapperTextArea>
                            <Label htmlFor='message'>{t('message')}</Label>
                            <TextArea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className={feedback.error ? 'error' : undefined}
                            />
                        </WrapperTextArea>
                    </WrapperRow>

                    <FeedbackMessage status={feedback.status}>
                        {feedback.message && feedback.message}
                    </FeedbackMessage>

                    <WrapperRow>
                        <ButtonContainer>
                            <Button
                                type='submit'
                                disabled={isButtonDisabled()}
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