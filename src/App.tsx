import { isNumber, markText } from './lib/utils'

function App() {
  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{ __html: markText({ repString: 'цил', fullString: 'Цилиндры' }) }} />

        { JSON.stringify(isNumber('Привет')) }
      </div>
    </>
  )
}

export default App
