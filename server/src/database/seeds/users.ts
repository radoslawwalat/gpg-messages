import {Knex} from 'knex';


export async function seed(knex: Knex): Promise<void> {
    const users = [
        {
            username: "1radwal1",
            public_key: "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
                "\n" +
                "mQINBGW+dEcBEAC3wMRATbNTi+0ytvNPD8kzbxuoRVpjmlBlanPqkO+iIEh5lY4P\n" +
                "18wxNbDgrYMf/g8JT7JEShWr99hjTkOJnPUfK6W+s4IJl/X6YrpVqAEXkCOqDxP9\n" +
                "wPMrazu5/NVjfgZgkvVuwu4BSckFLaVslP6Y0kRGx6yfeBWa1afX74TUvLg+EOF7\n" +
                "JlkxpUtvIQZ4Eh5vwK5DBQifGtFuUMVuL5+rfWfdlf9FV4nu7Xyk2zA68nEaGYyh\n" +
                "Pl8YzL+HgmPpgWfj5MQTVIwZCzU5/gMnsw0hb/Ru33bQo2W+DYjougr8O/DyTEPr\n" +
                "C6c0Up6FG7AnPDU975PCYpDtsONTeUajVPrBzX76fh4sw1xSJ0ZgaVRK+3KnIekx\n" +
                "GW7/Uqbu7nKKbBd5yvb3TZKB6PEBOzE+UQFG2ImjdoAM7icUEGVlLcYIX/GE2rM2\n" +
                "v4KzdeuJaHF8v3KeDjLYlEXtujZZA/5qahU0GWPF1RNU79bnLgjYu2ts2AOT6Nm0\n" +
                "eO95k0VdGzqKc+Trw8uZpgmhFwUJGWxwfgKKdiTXV/QlzrbDIkHBFp0/wxfqh5zS\n" +
                "RjZFe6ReiH9qA6X2l6BylcTjNcFc2JeV+kflL2M0xFOWD+lFKyaG//QWxFQ/cH/r\n" +
                "0w2j2eEbmDplF+o4xlgMqhkXt6UPWyuktxUsWHrmIV0Pg+pXnuvC3nKUBwARAQAB\n" +
                "tC1SYWRvc2xhdyAoaG9tZS1rZXkpIDxyYWRvc2xhd3dhbGF0QGdtYWlsLmNvbT6J\n" +
                "AlEEEwEIADsWIQSGa8mRyczO95pYWpn6QDqZ5uGzLgUCZb50RwIbAwULCQgHAgIi\n" +
                "AgYVCgkICwIEFgIDAQIeBwIXgAAKCRD6QDqZ5uGzLo19D/9mw6q01+EO9hPTUUJh\n" +
                "hCrTRpAnIpGjOmkNos/1m4rDqcJG6E0urNdXGMfPR60ljniqUmfojuqgr2rUHdeh\n" +
                "CX24JXrExhzZaNI6qV5Wwq6QfAXEB/7fnAe2+FIvYhUGpyWZoM0cmHqvvA4eWlkc\n" +
                "FRbXSrMYLB84WHuSPNJ5VASIBRb+YTdDzZDzLh6c++kkbqJ0Phf8pBGto4cKn4+Z\n" +
                "dopcaiRh48B8mvyRokpQSXFW/sY0b6zjtW0npeS3s/UpBsZl2u46wyPfA9Mn0shw\n" +
                "dW3TIRownozolWZXXqllHsGsfDNXymfmNOnpbB4L2O+FQ/L7MA1W3sDHYFoNT+H4\n" +
                "rG6kyOOhqzp09yOY3FpP0F3AgGpqj1EnPj3pXpUIg0fiMFRYj/wCpyYpeYy97W5y\n" +
                "lnaxC4GgbAJ/yXuT2Ox1dlZRq1O+cqM+F4pFSHk637JyBbOnglzL8CdgS2EZv/C6\n" +
                "qtu5g5R3nU+osWUPynqb1rgGh46TEgYJtB43H2EDpwmB6jkgG33Me8GeAKdTMdyy\n" +
                "49Nao7xe0Fd19xle83iML38674OQeigTV7cOSzqAjIpFlp+YXhE2D34TGYcU/eP2\n" +
                "W8TgrMT+OsI7vtMfQEbb5GrNsZqN5WQphy/egYf4D5pi6E+hJaEZlEeOwhd4r8ug\n" +
                "G3oa6II/rEagnvghsATWecr8+LkCDQRlvnRHARAA4cQnW6nawToIeC4XPXXC0XFc\n" +
                "99bGYFnynZqBQ30IufWu9H7rVyYNv7yhoj07rY0Z3LsQimz4E7NEoMsCbyCaz2yt\n" +
                "jR+d0RAaEpwsi8ryE7fN2iN93eSL+MaYHB6OFr8ZiN9Z0YZVtOjFWMhktUZvUrqT\n" +
                "WKOWDBUKIc3A7Rrs2GeEQZxbT6p4hFomGFl6zdL/EudSx6k5lk7+lngJi7vixjGv\n" +
                "2G+DCezBUoPBOdTp1NKwz0DOCHgoYfQ9ko7AGQp0ZM+qJb+b3pY5iQwzdSDhsP8B\n" +
                "ap0mSOTz58zgqBmsMe1fFYAHg2NmFuGPFdD2fpn7Rwd6/UDN0s347nSkaqXEujMo\n" +
                "x8eEyuye8eYroIaV7s6eWIq1JFX4/0ll6Dy1diq6/3f6Wj0MeWlASghBamhNCPQW\n" +
                "XGR8B/ID3MZFuQ0rjqX8Som46uHlud5IeBL0ZetDVpM1nTqF52uV9t7b8cePCp4z\n" +
                "dqquE5rkeTVAat1OEPbNlbrT3e5a/SRsuZlLpxMC9dZcE/t6REN/QBj7TeaoQKo5\n" +
                "42OjHUL6hoOef03BZ2Y3BoL6Dv/Pjc+557DMPheYlyuqOzAUbbXeW9heBZ6dCXiB\n" +
                "F1wDgvZ8+e0jdcsw4YM4fgLB0+m2UyxrEFFw1ajw7hFrsanBnlyfNUavmNz+NBYC\n" +
                "+1XwPyvptO/N4mrl1JMAEQEAAYkCNgQYAQgAIBYhBIZryZHJzM73mlhamfpAOpnm\n" +
                "4bMuBQJlvnRHAhsMAAoJEPpAOpnm4bMu77oQAIKzLyRQq+L7maL3ild/MHYDieH2\n" +
                "ohD2n45WBWqb7Aj/w3m7DuK017Ys5Sr1/0+qAgRpbxhLb39meq0Qd8lAy6r3Nt2g\n" +
                "RDlHzOELuWWDwe20wv0fcPT6KPECQeaArubZtJRYlGH/S+HI1bHlgsuWAnwADzn5\n" +
                "fKkuWgfMMEAFA7rMK8QSf6O9E4q7UImcd4BDqTILTwa4u+RLGEfHH9EuRDC0E77X\n" +
                "TlvHHiMxVlbJOQD6SAYQkF1Dt/d8+qZXfRy/zjbZkXC9SyBOk1pKadA0rrifgI4Q\n" +
                "6RdThElLQPKoPPq7BR6/OJaZlGWFxg4F4g/I1l3dU5petsydRnNORS5u92Ihk7z7\n" +
                "+nBBcdCh+yz/8EgRiFK1DY52kyskLBPabZ0OP0hr6H++8mYW5Kpzhw2z4imRTn5h\n" +
                "ZuW/dMMoOmHdaQStJJeQBh+yUupt8fQRAUF0hmDNXum4YPHhTAcLwTihGGsG7NBS\n" +
                "cGbS1TsR+3vxywMf29SauKxEd/60X+NN/l/1Eqi2dsJHK1gJKlJz4CWxEKj6UF4t\n" +
                "T9Q0GKqACgQyo8CZ9tTK6ttad8gTZ+LJMtAwUXmjQoSElSJThX0UW9gqMvCzTQqM\n" +
                "fyRxohEBTdrtCyr6pcxCnnGEDtxx/x2stoPmqrOLZH6K7x8oKi3taolKa0iPuA2p\n" +
                "nlJX1lIVUAgItoLQ\n" +
                "=qu/d\n" +
                "-----END PGP PUBLIC KEY BLOCK-----",
            password: "7509e76494c4692734006087878aca4117904823fe7fe8f188ee04512b804a8c",
            salt: "jcVDAA+oGFamBEHY4AIAgbIYmz1zJy8y5yQKa/VHnf/yksEsjtPRCGv2zC1NWwD5MdK93xbW3IGYvsRA4Q3PoiFRQ/I5U5Bi1gQYCYbZTFHbfao7RJpbV2irnBUoMMrvubrm9hNluuCsrBuA6erzCkktSZ92PxJyRe1tMRTvOj4="
        },
        {
            username: "paxters",
            password: "fcdae15b26538105bea308566864583974198ef7607a97666f501735a89eec5a",
            salt: "iZ55TYnE0UcWJb+P+DdDwTNMH4KMmp+TyuItSYm8Sg+DhE+64VuyrEGY3KMW46cKwPPpK8MX/5dyDzdSzeE8dZRkoFaLDiUCi4znrKP8skXOWROOXHiGJ20MKBxQ7l8cYPiHIzAcrfcPMxtgti/b5qzmjHaQuoQCgUewo/EowUI="
        }
    ];

    await knex('users').del();
    await knex('users').insert(users);
}
