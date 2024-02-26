### Krok 1: Wykonanie migracji (z poziomu foldera database)
Wszystkie poniższe komendy muszą być wywoływane z folderu server/src/database
Następnie, aby utworzyć schemat bazy danych, użyj poniższej komendy migracji:
`npx knex migrate:latest`

### Krok 2: Załadowanie danych początkowych
Aby wypełnić bazę danych danymi początkowymi, wykonaj komendę seed:
`npx knex seed:run`

### Krok 3: Cofnięcie migracji
W przypadku konieczności cofnięcia migracji bazy danych użyj komendy:
`npx knex migrate:rollback --all`