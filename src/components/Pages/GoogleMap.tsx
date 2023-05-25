import React from "react";
import { MapStyled } from "./styled";

export const GoogleMap = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <MapStyled
        title="maps"
        src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.277084%2C56.066571&mode=search&oid=177468249657&ol=biz&sctx=ZAAAAAgBEAAaKAoSCReDh2nfYEJAEY1F09nJLExAEhIJ9WbUfJU8%2Bz8RgJ4GDJK%2B5j8iBgABAgMEBSgKOABAnIIGSAFiNnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vU3VidGl0bGVzL1VzZUxvbmdQaW5TdWJ0aXRsZXM9MWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9TdWJ0aXRsZXMvUmFuZG9tUGluU3VidGl0bGVzPTFqAnJ1nQHNzEw9oAEAqAEAvQHJVzDNwgEL2N%2Fdzga5rLqPlQXqAQDyAQD4AQCCAgpGdW4gRm9yZXN0igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=37.277084%2C56.066571&source=mapframe&sspn=0.007917%2C0.005594&text=Fun%20Forest&utm_source=mapframe&z=16.73"
      ></MapStyled>
    </div>
  );
};
