import {useEffect, useState} from "react";
import {getMenuList} from "../api/MenuAPI";
import boxStyle from "./Menu.module.css"
import MenuItem from "../components/MenuItem";
import {useNavigate} from "react-router-dom";

// 일반 css 파일을 이용하면 작업물을 합쳤을 때 class name conflict로 인해 디자인이 변경되는 경우가 있다.
// module.css 파일은 class 이름에 랜덤한 문자를 붙여 class name conflict를 방지한다.
function Menu() {

    const [menuList, setMenuList] = useState();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        // 메뉴 목록 조회 => MenuAPI.js 파일을 만들어서 API 호출 함수를 모아둔다.
        setMenuList(getMenuList());
    }, []);

    // react-router-dom의 useNavigate hook을 호출하면 하나의 함수가 반환된다.
    // 해당 함수에 router로 요청하는 주소를 전달하면 url이 변경된다.
    const navigate = useNavigate();

    const onClickHandler = () => navigate(`/menu/search?menuName=${searchValue}`);

    console.log('menuList : ', menuList);

    return (
        <div>
            <h1>메뉴 목록</h1>

            <div>
                <input
                    type="search"
                    name="menuName"
                    value={searchValue}
                    onChange={ e => setSearchValue(e.target.value) }
                />
                <button
                    onClick={onClickHandler}>
                    검색
                </button>
            </div>

            <div className={boxStyle.MenuBox}>
                { menuList && menuList.map(menu => <MenuItem key={menu.id} menu={menu}/>) }
            </div>

        </div>
    );
}

export default Menu;