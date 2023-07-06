import { Box, Button, Container, Flex, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box px={4} bg={useColorModeValue('gray.100', 'gray.900')}>
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <Heading as='h1' fontSize="2xl" cursor="pointer" color={useColorModeValue('black', 'white')}>
                        うんちくエウレーカクイズ🎉
                    </Heading>
                    <Button size='lg' onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Container>
        </Box >
    )
}

export default Header;