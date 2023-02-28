import Form from 'react-bootstrap/Form';

const Textarea = (props) => {
  const TextChangeHandler = () => {
    console.log(props.setTitle)
  }
  return (
    <Form className='container'>
        <textarea className="form-control hidden-resize h-20"
        type='text'
        size="lg"
        rows='10'
        value={props.title}
        onChange={TextChangeHandler}
        placeholder='Type Your Text Here...'></textarea>
    </Form>
  )
}

export default Textarea
