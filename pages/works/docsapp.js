import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="DocsApp">
    <Container>
      <Title>
        DocsApp
      </Title>
      <P>
        A Markdown note-taking app with cross-platform and
        encrypted data sync support which helps you edit and create real time documents.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://docsapp.vercel.app/">
            https://docsapp.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js(React), JavaScript,Tailwind CSS, Firebase,Rich Text Editor</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/docsapp_01.png" alt="DocsApp" />
      <WorkImage src="/images/works/docsapp_02.png" alt="DocsApp" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
