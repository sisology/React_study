import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMenuDetail} from "../api/MenuAPI";

function MenuDetails() {

    // react-router-dom의 useParams라는 hook을 이용하여 path variable을 읽어올 수 있다.
    // 구조분해할당하는 이름은 <Rout>에 설정한 ":menuCode"로 설정되어야 한다.
    const { menuCode } = useParams();

    const [menu, setMenu] = useState();

    useEffect(() => {
        setMenu(getMenuDetail(menuCode));
    }, []);

    return (
        menu &&
        <>
            <h2>메뉴 상세 페이지</h2>
            <h2>메뉴 이름 : { menu.menuName }</h2>
            <h2>메뉴 가격 : { menu.menuPrice }</h2>
            <h2>메뉴 종류 : { menu.categoryName }</h2>
            <h2>메뉴 설명 : { menu.detail.description }</h2>
            <img src={ menu.detail.image } style={ {maxWidth:500} } alt={ menu.menuName }/>
        </>
    );
}

export default MenuDetails;