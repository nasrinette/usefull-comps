import Accordion from '../components/Accordion';

function AccordionPage() {
  const items =[
    { id: 1,
      label: "some label1",
      content:"some content"
    },
    { id:2,
      label: "some label2",
      content:"some content some content"
    },
    { 
      id:3,
      label: "some label2",
      content:"some content some content some content"
    }
  ]

  return <Accordion items={items}/>
}

export default AccordionPage;
