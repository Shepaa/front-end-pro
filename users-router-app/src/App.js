import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BasePage} from "./featurs/pages/BasePage";
import {NotFound} from "./featurs/pages/NotFound";
import {UserList} from "./featurs/users/UserList";
import {AlbumsList} from "./featurs/users/AlbumsList";
import {PhotosList} from "./featurs/users/PhotosList";

export function App() {


    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BasePage/>}/>
                    <Route path="/user" element={<UserList/>}/>
                    <Route path="/user/:userId/albums/*" element={<AlbumsList/>}/>
                    <Route path="/user/:userId/albums/:albumId/photos" element={<PhotosList/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>

    );
}


