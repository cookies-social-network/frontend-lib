import { isNumber, replaceString } from './lib/utils'

function App() {
  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{ __html: replaceString('цили', 'Цилиндр') }} />

        { JSON.stringify(isNumber('Привет')) }
      </div>
    </>
  )
}

export default App
