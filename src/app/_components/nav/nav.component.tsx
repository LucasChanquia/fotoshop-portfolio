import { list } from "@/utils/menuList";
import Image from "next/image";
import Link from "next/link";
import "./nav.component.scss"

export function NavComponent() {
  return (
    <>
      <header>
        <nav>
          <div>
            <Link href={"/"}>
              <Image
                src="/img/logo.png"
                width={150}
                height={50}
                alt="FotoShop logo"
              ></Image>
            </Link>
          </div>
          <div>
            <ul>
              {list?.map(({ id, name, href }) => (
                <Link href={href} key={id} className="link">
                  <li>{name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
