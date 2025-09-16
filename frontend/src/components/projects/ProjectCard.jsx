import { Accordion, Span, Card, Box, Link } from "@chakra-ui/react"
import Navbar from '../Navbar'
import Footer from '../Footer'


const DemoCard = ({ link, title, description, accordionTitle, accordionItems }) => {
  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Card.Title mt="2">{title}</Card.Title>
        {/* <Card.Description>{description}</Card.Description> */}
        <Link variant="plain" href={link}>{description}</Link>
      </Card.Body>

      <Card.Footer justifyContent="flex-end">
        <Accordion.Root collapsible>
          <Accordion.Item>
            <Accordion.ItemTrigger>
              <Span flex="1">{accordionTitle}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>

            {accordionItems.map((item, index) => (
              <Accordion.ItemContent key={index}>
                <Accordion.ItemBody as={Box} overflow="hidden" transition="all 0.3s ease">
                  {item}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            ))}
          </Accordion.Item>
        </Accordion.Root>
      </Card.Footer>
    </Card.Root>
  )
}

export default DemoCard

