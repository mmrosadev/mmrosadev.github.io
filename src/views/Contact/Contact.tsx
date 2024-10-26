import { CustomAnchor } from '@/components'
import { Container, ContactContainer, Icon, Wrapper } from './styles'
import { letterImg, phoneImg } from '@/assets'

export function Contact() {
    return (
        <Container>
            <ContactContainer>
                <Wrapper>
                    <CustomAnchor
                        href='https://wa.me/5521975606376'
                        target='_blank'
                        label="+55 21 97560-6376"
                    >
                        <Icon src={phoneImg} size='small' />
                    </CustomAnchor>

                </Wrapper>
                <Wrapper>
                    <CustomAnchor
                        href='mailto: mmrosatab@gmail.com'
                        target='_blank'

                        label="mmrosatab@gmail.com"
                    >
                        <Icon src={letterImg} size='small' />
                    </CustomAnchor>

                </Wrapper>
            </ContactContainer>

        </Container>
    )
}