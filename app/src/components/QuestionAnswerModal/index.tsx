import { Button, Modal, ModalBody, Text, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Box } from "@chakra-ui/react"

const QuestionAnswerModal = ({
    isOpen,
    onClose
}: {
    isOpen: boolean,
    onClose: () => void
}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent margin="32px">
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
)

const QuestionAnswerModalButton = ({
    onToggle
}: {
    onToggle: () => void
}) => {
    return (
        <Box textAlign="center" margin="16px 0" onClick={onToggle}>
            <Button>
                回答と見る
            </Button>
        </Box>
    )
}

export {
    QuestionAnswerModal,
    QuestionAnswerModalButton
}