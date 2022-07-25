import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { Avatar } from "@chakra-ui/react";

export function Menu(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deslogar = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-[#07B7DE] h-16 w-screen fixed top-0 flex justify-center">
      <div className="lg:w-4/5 w-full h-full flex items-center">
        <ul className="flex justify-around items-center w-full h-full text-lg font-medium text-white mt-2">
          <li>
            <Link to={"/home/upload"}>
              <p className="flex flex-row text-4xl   font-texto font-bold">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 48 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4055 52.6243L13.6536 52.4826L13.9016 52.6243L19.7826 55.9857C21.0317 56.6993 22.4454 57.0746 23.884 57.0746C25.3226 57.0746 26.7363 56.6993 27.9854 55.9857L33.8663 52.6215L34.1144 52.4796L34.3625 52.6213L43.1433 57.6372C43.5115 57.8476 43.9285 57.9576 44.3526 57.9563C44.7767 57.9549 45.1931 57.8423 45.56 57.6297C45.927 57.417 46.2316 57.1118 46.4436 56.7444L46.8767 56.9944L46.4436 56.7444C46.6556 56.3772 46.7674 55.9608 46.7681 55.5368V8.76902C46.7681 6.57594 45.8969 4.47268 44.3461 2.92194C42.7954 1.3712 40.6921 0.5 38.499 0.5H9.26898C7.0759 0.5 4.97264 1.3712 3.4219 2.92194C1.87115 4.47268 0.999958 6.57594 0.999958 8.76902V55.537C0.999958 55.537 0.999958 55.5371 0.999958 55.5371C1.00012 55.9614 1.11168 56.3782 1.32348 56.7458C1.5353 57.1134 1.83995 57.419 2.20696 57.632C2.57397 57.8449 2.99047 57.9577 3.41478 57.9592C3.83908 57.9606 4.25634 57.8506 4.62477 57.6401L13.4055 52.6243ZM24.3808 29.7392L24.3808 29.7391L24.3869 29.733L27.3128 26.8071H23.884C22.4662 26.8071 21.1064 27.3703 20.1038 28.3729C19.1012 29.3754 18.538 30.7352 18.538 32.1531V35.0761C18.538 35.9839 18.1774 36.8546 17.5354 37.4965C16.8935 38.1385 16.0228 38.4991 15.115 38.4991C14.2072 38.4991 13.3365 38.1385 12.6946 37.4965C12.0526 36.8546 11.692 35.9839 11.692 35.0761V32.1531C11.692 28.9195 12.9765 25.8185 15.2629 23.532C17.5494 21.2456 20.6505 19.9611 23.884 19.961H27.3128L24.3899 17.0381C24.0644 16.723 23.8048 16.3464 23.626 15.9302L24.0854 15.7328L23.626 15.9302C23.4466 15.5125 23.3522 15.0634 23.3482 14.6089C23.3443 14.1544 23.4309 13.7036 23.603 13.2829C23.7751 12.8623 24.0293 12.4801 24.3507 12.1587C24.6721 11.8373 25.0542 11.5831 25.4749 11.411C25.8956 11.2389 26.3463 11.1523 26.8008 11.1562C27.2553 11.1602 27.7045 11.2546 28.1221 11.434C28.5384 11.6128 28.9149 11.8724 29.2301 12.1978L37.9962 20.9639L37.9962 20.964C38.6379 21.6059 38.9984 22.4764 38.9984 23.3841C38.9984 24.2917 38.6379 25.1622 37.9962 25.8041L37.9962 25.8042L29.2271 34.5732L29.2272 34.5732L29.2209 34.5793C28.5754 35.2028 27.7107 35.5478 26.8132 35.54C25.9157 35.5322 25.0572 35.1722 24.4225 34.5376C23.7879 33.9029 23.4279 33.0444 23.4201 32.1469C23.4123 31.2494 23.7573 30.3847 24.3808 29.7392Z"
                    fill="white"
                  />
                </svg>{" "}
                doaí
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/home/upload"}><span className={` mr-2 ${props.menuAtual == 1 ? 'underline font-extrabold text-xl': ''}`}> Carregar Notas Fiscais</span></Link>
          </li>
          <li>
            <Link to={"/home/instituicoes"}><span  className={` ${props.menuAtual == 2 ? 'underline font-extrabold text-xl': ''}`}> Instituições</span></Link>
          </li>
          {user.isLogged && (
            <>
              <li>
                <Link to={"/home/historico"}><span className={` ${props.menuAtual == 3 ? 'underline font-extrabold text-xl': ''}`}>Minhas Doações</span> </Link>
              </li>
              <li>
                <Link to={"/home/upload"}><span className={` ${props.menuAtual == 4 ? 'underline font-extrabold text-xl': ''}`}>Ajuda</span></Link>
              </li>
              <li>
                <Link to={"/home/perfil"}>
                  olá, <span className={` ${props.menuAtual == 5 ? 'underline font-extrabold text-xl ': ''}mr-2`}>{user.name}</span>
                  <Avatar  size={"sm"} src='https://bit.ly/broken-link' />
                </Link>
              </li>
            </>
          )}

          <li>
            <a className="cursor-pointer" onClick={deslogar}>
              sair
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
