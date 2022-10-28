import React from 'react';

function Nav() {
    const categories = [
        {
          name: "Portfolio",
          description:  "Arturo Arce's Web Portfolio"
        },
        { 
            name: "Resume",
            description: "Arturo Arce's Resume"
         }
      ];

      function categorySelected(name) {
        //console.log('Hello')

        console.log(`${name} clicked`)
      }

    return (
        <header>
            <h2>
                <a href="/">
                    <span>Arturo Arce</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;