import type { NextPage } from 'next'
import { Center, Heading, Stack, Box, Image } from '@chakra-ui/react'

const Page: NextPage = () => {
  return (
      <Center height={'100%'} py="4rem">
        <Stack spacing="2rem" alignItems={'center'} textAlign="center">
          <Box width="8rem" height="8rem">
            <Image alt="Certificate icon" src={""} />
          </Box>
          <Heading color="black"fontWeight={900} size="2xl">
            Please connect to your wallet
          </Heading>
        </Stack>
      </Center>
  )
}

export default Page
