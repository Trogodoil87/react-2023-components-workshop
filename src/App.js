import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Search } from "./components/search/Search";
import { Pagination } from "./components/pagination/Pagination";
import { UserList } from "./components/user-section/UserList";
import { UsersListEmpty } from "./components/utils/UsersListEmpty";
import { UserNotFound } from "./components/utils/UserNotFound";
import { Error } from "./components/utils/Error";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />

                    {/* <UsersListEmpty />  */}
                    {/* <UserNotFound /> */}
                    {/* <Error /> */}
                    {/* <div className="spinner"></div> */}
                    <UserList />
                    <Pagination />
                    <div><Link to="someinfo">Go to </Link></div>

                    <Routes>
                        <Route path="/someinfo" element={<h1>Some Info</h1>} />
                    </Routes>

                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
