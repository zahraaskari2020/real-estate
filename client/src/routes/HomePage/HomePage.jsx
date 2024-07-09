import SearchBar from "../../components/searchBar/SearchBar"
import "./HomePage.scss"

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find real estate & get your dream place</h1>
          <p>it is a long established fact that a reader will be distracted by the readable
             content of a page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as opposed to using
               'Content here, content here', making it look like readable English
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>awards gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>properly ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="building"/>
       </div>
    </div>
  )
}
