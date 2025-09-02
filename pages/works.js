import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/docsapp_eyecatch.png'
import thumbWalknote from '../public/images/works/dca_eyecatch.png'
import thumbFourPainters from '../public/images/works/bookstore_eyecatch.png'
import thumbMenkiki from '../public/images/works/crypx_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="docsapp" title="Docsapp" thumbnail={thumbInkdrop}>
            Document App like Google Docs used to take notes edit documents in realtime
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dca"
            title="Decentralised Chat App"
            thumbnail={thumbWalknote}
          >
            Decentralised Chat Application which does not use any central database 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="bookstore"
            title="The Web3 Bookstore"
            thumbnail={thumbFourPainters}
          >
            A bookstore application with ui like amazon to purchase books using crypto wallets
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="crypx" thumbnail={thumbMenkiki} title="Crypx-Crypto Exchange">
            An crypto exchange which lets you send and recieve cryptocurrencies.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
