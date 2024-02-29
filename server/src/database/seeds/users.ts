import {Knex} from 'knex';


export async function seed(knex: Knex): Promise<void> {
    const users = [
        {
            username: "1radwal1",
            create_date: "01.09.1939",
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
                "-----END PGP PUBLIC KEY BLOCK-----"
        }, {
            username: "paxters",
            create_date: "01.01.0001",
            public_key: "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
                "\n" +
                "mQINBGW/oNoBEACdVLOCkzNQ9wKN2CIq+cT1hZ0XZ1CVyGGCNkEi5/lrfjsR9f69\n" +
                "PV5JnS7IrGskWl7wyg7j05PYMARpN6y5WBp/SvlniCV8ZAhfSUHjUHUtyX89oVRx\n" +
                "DZCdN+8v8cYt2SglT72lZErzThb+w44Jh0qTb5rtXaqd48peQAOY2w4UMw8hrtTy\n" +
                "C4pSvFYOsMeDBgMgq6zPlqziQCsikUrJADSrf3YZn78aJ5FdArN8MIdAhWF+JMgc\n" +
                "x7tPvwkHelxD+eeyf8ivMwHjblCwQ7O4u1zTVDy/yMIPln1bvcoNkvi1iURnf+C9\n" +
                "kWnH4OMZrUCjibvI446o78Rom7YTWVUQJsq8z8KvI9C0/SESklAlvVOIXowsnMSr\n" +
                "Lt3aJ/ea+EEkVZ0qehr42u8kKKiVg03E8Te5zIopS3mpKcmll0XEmHMW3GIaCtGZ\n" +
                "dJ8ODKPkW99JhhcPF/lwG1ckt6Gp0aHpkldYUw7WCtFrkNhUIrHFQNQVxWqtliRC\n" +
                "Bs80WdE+9bxjKmIE6ryYYtLEOXW6zXdNY5D8W1lMEaKU4ZbF+M9B7NPXTIUySrjY\n" +
                "5o5r9EvtyqYUNuRT9fcOMOX1sB9YETVslGdsRFcntf6uP4I/EwQd3ip9bEUeWZDs\n" +
                "5aU4BeV8L0qjxXK9yqAoy8FYWojSxqqHwIlSD0WX7KNXddkPBsNYl/ApAQARAQAB\n" +
                "tCZXb2pjaWVjaCA8d29qY2llY2guY2h1Y2hyb0BpY2xvdWQuY29tPokCTgQTAQoA\n" +
                "OBYhBFG5j8fQdLMImCaTBWDi02zDiIqLBQJlv6DaAhsDBQsJCAcCBhUKCQgLAgQW\n" +
                "AgMBAh4BAheAAAoJEGDi02zDiIqLKm0P/i/u2YZJvx8pTHdpaFrIljMHZDN6fC4O\n" +
                "AKz+EonVLM7y38C14vEJh7C3QUWgQ/Z7zdhLKA7Es7HmOQq0fYuk2VHFfQKDN/cj\n" +
                "aB4VSzdcDCfqK8nqAzephyP9edVKXaeW1pT44LYFsBiH9AeX9ggA94NdXU/wzmu5\n" +
                "KjYIhloFZ4x4M5+6iRsFXISkHYXgrldssPnudR+zMbPm63fP8dz+aCgh73G6pFP+\n" +
                "TTWgszUAkRDNbFhM33NkLXwEKaZKLUdb2RRPszCejg4a+mUBV8GncB0zMhMrutQa\n" +
                "NzL96GIfIuj1n27Gba8Q7yoSZ63QtfHJWK/2fqh6vuAKd4spXNzOLLF//AS0/wI+\n" +
                "pAnHTtx5UgJ8rx78HFkuK6AJMmbT/Qtmeh20QyW9DYEk0ZTrLs8zDk9Nw+wyyeTd\n" +
                "DEhaJlw80e9wpc//vKrLiKPRk9VtVKcks2dSj7oYGP8AGckW1dlR5Ni5Tgr0UuIN\n" +
                "pCO13+5tlx2fKMw5VQyNu9ND6BtB6bt6ZbtQnDgJ9ybxoUVbIidieYLvjnDmwPL8\n" +
                "joaFnF0SzFWXiKi5dyKIdVPGdpjgjRmQkAyWOjErFoYxSaDSxiBFW5bE5AlAwPh8\n" +
                "wFGrQbc11UJdeGBtz+JlOMAl5mGx3rs0Ehej4ysjkaqkpXEMKLfxgfUj04yZDIPp\n" +
                "xMOQ1Jw18UiMuQINBGW/oNoBEADagOhT1TfVN3AG5uRo0ng+TdymM6EQdOKUq065\n" +
                "P/8ooNgAejmXOzv1GEagzsnKYemv4vuS1aoY4qmEUSs+z7aZlLc2lClQ/rTqIrcy\n" +
                "CWJ5WnQ53YDTg9L3MFjneb1UBLn6MTuautDPbcpSQg27BIyQNaCDGEYjH8wS8Clm\n" +
                "W+r0OJ/NGP8i1Wv+rLuNW/4eIBluFglUNx5/JKWo3M4fTWWK7vF+twyXL6hGfqbd\n" +
                "5A8mfCzcpllwUvMf/JEei2nGBnMIJRDEUihoi1qmpKtMy0EykBLnY+iCvSLTjQk0\n" +
                "Y6gyaODeXdurXF7XJW7xBLX1uAU/0pz15JTrr3BMZeUWSp1Mfh+Mzgq2+Bxyi6vq\n" +
                "nfRnh5IuyGnnxjfbSCGEl0ezOXGz88bIuPTwQBkwTpRakpuZuosj6bp5mzTj9gR8\n" +
                "US78teJQZmP8p+YcwWyD0p5BPCWn+L3WA+vp3dTTpAdBIz9s9E0YW6MFvB3d9Mir\n" +
                "ObJV8h6tPqsVTgcqmDQJj/7qGObv5RxrDQjCvS8wUBu1DeVdEOjw7+W+apGEL04g\n" +
                "u58flD+yYpzpZIojW6YaKFZYtSM0fQpbbuQRt8upzLNb+2irulEvnHAlLUkFyJ/K\n" +
                "cFPJkbT4OZSBKS4a15RgmCOv095eVNEhYfAzrHCc5DflxJzsTUKG3vx5UBv7M3ZH\n" +
                "zgV5MQARAQABiQI2BBgBCgAgFiEEUbmPx9B0swiYJpMFYOLTbMOIiosFAmW/oNoC\n" +
                "GwwACgkQYOLTbMOIiovulg//ZRNnBbsePp1j8FEVILlAQ3oyLb53hYun3baTbAvv\n" +
                "DY6NrGq9hU1TxR502vgl+Fqm1Tahb7DSMsF0sTdIwI9XSP3WMCa7K2uzZv/mHPR8\n" +
                "/t0bygeqLLCfe33LRyiBlzHVZbAw4Uu7Em/Lxf/+T95CI9q7QRwLkT/h6Zcod8FS\n" +
                "gaRAnoNZEf1XzZBvc3Cg99DMiSUOwmEplXJCmfyELtaJ48vLEHoAcfIJuEw6NZ7y\n" +
                "ROG0kp+icspnNxa3zcWCOt45Gl4Sz591ZN+L20WB/OXSY+EX00uXpeAAfZt/2bjM\n" +
                "XTbIV6i3HM5WTTHaa9gTEpXRj4Jv7GJJf6exIQpogimME1zklKQ767cm/4dGmIdE\n" +
                "tXLL+2qXZl/EFY9EJU2SFN0hy41oM5QKfrt6GuO8uYKshMWoEyiPjdgohgO+peM4\n" +
                "WHjrFpMcQIXzOhCgwDme+EE1/hGZ0pAdAJXxQesmPCH3gjXH/c6lbyjuWSiBF2bI\n" +
                "s57AWKVtV1cJqr7j542wtL9fhxnj01mh+W8XI1n1OWSp2YPyYmulLNJ8PS+m6ICV\n" +
                "Luwp5Y2OpO4VbwZDMZsvgOSl8h+0T8UuCwNodRNVNDArtjddzujc59OWy+6WfgDM\n" +
                "+RSgIGWwmiuvwm+rhK+B2UBY4e8ykkSkmhnlidqtIg+bz9uYi0t1zTDq7Z7X7azu\n" +
                "tQo=\n" +
                "=+2/D\n" +
                "-----END PGP PUBLIC KEY BLOCK-----"
        }
    ];

    await knex('users').del();
    await knex('users').insert(users);
}
