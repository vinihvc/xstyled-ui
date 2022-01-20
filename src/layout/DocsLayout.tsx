import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Flex,
  Stack,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { Logo } from '@/components/logo'

interface DocsLayoutProps {
  children: ReactNode
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', onClose)

    return () => {
      router.events.off('routeChangeComplete', onClose)
    }
  })

  return (
    <>
      <Header />
      <Container maxW={'7xl'} flex={'1 0 auto'} py={8} mt={20}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 0, lg: 8 }}
        >
          <Navigation display={{ base: 'none', lg: 'block' }} />
          <Flex
            direction={'column'}
            w={'full'}
            maxW={{ lg: 'calc(100% - 16rem)' }}
          >
            {children}
          </Flex>
        </Stack>
      </Container>
      <Footer />

      <IconButton
        display={{ base: 'block', lg: 'none' }}
        position={'fixed'}
        bottom={4}
        right={6}
        size={'md'}
        isRound={true}
        onClick={onOpen}
        aria-label={'Toggle Docs Menu'}
        bg={'white'}
        css={{
          boxShadow:
            '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'
        }}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Icon as={Logo} w={10} h={10} />
            </DrawerHeader>
            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
