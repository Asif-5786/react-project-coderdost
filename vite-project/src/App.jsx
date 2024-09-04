
import './App.css'
import Profile from './components/Profile'
import Video from './components/Video'

function App() {

  const names = [
    { id: 1, nicnamename: 'pongu', year: 2017 },
    { id: 2, nickname: 'kagul', year: 2021 },
    { id: 3, nickname: 'shaik', year: 2024 },
    { id: 4, nickname: 'jaan-mummy', year: 2019 },
    { id: 1, nickname: 'jannati', year: 2023 },
    { id: 1, nickname: 'jaan', year: 2022 }
  ]
  return (
    <div>
      {/* <Profile
        name="Syeda Tasleem Mehdi"\
        address="Habsiguda"
      /> */}
      {names.map(
        video => <Video id={video.id} name={video.nickname} year={video.year}></Video>
      )}
    </div>
  )
}

export default App
