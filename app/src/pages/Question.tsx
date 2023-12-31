import { Container, Heading, Text, useBoolean } from "@chakra-ui/react";
import { QuestionAnswerModal, QuestionAnswerModalButton } from "../components/QuestionAnswerModal";

const Question = () => {
    const [open, setOpen] = useBoolean();
    return (
        <>
            <Container maxW='container.lg' marginTop="16px">
                <Heading as='h1' size='4xl' marginBottom="16px">
                    あああああああああ
                    あああああああああ
                </Heading>
                <Text>
                    これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。
                    これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。
                    これはテストです。これはテストです。
                    これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。
                    これはテストです。これはテストです。これはテストです。これはテストです。
                    これはテストです。これはテストです。これはテストです。これはテストです。
                    これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。
                    これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。
                    これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。
                </Text>
                <QuestionAnswerModalButton onToggle={setOpen.toggle} />
            </Container>

            <QuestionAnswerModal isOpen={open} onClose={setOpen.off} />
        </>
    )
}

export default Question;