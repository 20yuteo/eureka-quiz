import { Card, Heading, VStack, Container, Flex, Link } from "@chakra-ui/react"

const QuestionList = () => (
    <>
        <VStack spacing='24px' maxW="735px" margin="auto" paddingTop="16px">
            <Container maxW='md' color='white'>
                <Link textDecoration="none" href="/question/1">
                    <Flex direction="row" maxW="500">
                        <Card
                            overflow='hidden'
                            variant='outline'
                            minW="100px"
                            maxH="1000px"
                            textAlign="center"
                            fontSize="4xl"
                        >
                            🦕
                        </Card>
                        <Heading as='h6' size='md' textAlign="center" marginLeft="8px">The perfect latte</Heading>
                    </Flex>
                </Link>
            </Container>
            <Container maxW='md' color='white'>
                <Link textDecoration="none" href="/question/2">
                    <Flex direction="row" maxW="500">
                        <Card
                            overflow='hidden'
                            variant='outline'
                            minW="100px"
                            maxH="1000px"
                            textAlign="center"
                            fontSize="4xl"
                        >
                            🦕
                        </Card>
                        <Heading as='h6' size='md' textAlign="center" marginLeft="8px">The perfect latte</Heading>
                    </Flex>
                </Link>
            </Container>
            <Container maxW='md' color='white'>
                <Link textDecoration="none" href="/question/3">
                    <Flex direction="row" maxW="500">
                        <Card
                            overflow='hidden'
                            variant='outline'
                            minW="100px"
                            maxH="1000px"
                            textAlign="center"
                            fontSize="4xl"
                        >
                            🦕
                        </Card>
                        <Heading as='h6' size='md' textAlign="center" marginLeft="8px">The perfect latte</Heading>
                    </Flex>
                </Link>
            </Container>
        </VStack>
    </>
)

export default QuestionList
