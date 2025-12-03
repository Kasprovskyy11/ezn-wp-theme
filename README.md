# Dokumentacja techniczna projektu
---

Skład zespołu: Mikołaj Sajewicz, Kacper Banucha
Opiekun zespołu: Dmytro Zavhorodnii

Link do projektu: https://stronaezn.page.gd/ 
Dane dostępowe do panelu administratora zostały podane w sekcji "Panel administratora - nasza domena" poniższej dokumentacji. 
# Struktura repozytorium projektu

1. Folder /ezn-react-theme/ - przygotowany folder do importu motywu na WordPress,
2. folder /ezn-react-theme-code/ - wszystkie foldery i pliki, w których jest napisany nasz projekt,
3. folder /website-assets/ - wszystkie multimedia używane w projekcie. 

# Instalacja i uruchomienie projektu

Instalacja odbywa się poprzez pobranie folderu motywu z repozytorium GitHub, link: i umieszczenie go w liście motywów WordPress.

Aby dodać motyw należy pobrać folder /ezn-react-theme/, w którym znajdują się wszystkie pliki niezbędne do uruchomienia motywu.  
Lista plików i folderów zawarta w /ezn-react-theme/:
1. /dist/
2. functions.php
3. index.php
4. style.css

Z folderu /website-assets/ z repozytorium należy umieścić multimedia na serwerze. 
WAŻNE: nie można zmieniać nazw plików multimedialnych znajdujących się w folderze /website-assets/. 

Następnie należy dodać folder jako motyw w zakładce "Motywy" na WordPress i włączyć. Po włączeniu motyw powinien się poprawnie wczytać i zaciągnąć dane, które następnie wyrenderuje na stronie. 

## Zmiana danych dostępowych do bazy danych
Wymagana jest zmiana danych dostępowych w pliku wp-config.php, który znajduje się na serwerze w głównym folderze WordPress, aby poprawnie obsługiwać bazę danych. 

## Panel administratora - nasza domena
Aby zalogować się do panelu administratora na naszej domenie należy wejść w link: https://stronaezn.page.gd/wp-admin/.  Zostało utworzone tymczasowe konto z loginem admin i takim samym hasłem, które zostanie usunięte po zakończeniu konkursu. 

W razie ewentualnych problemów z instalacją motywu, twórcy zapewniają pomoc w instalacji i konfiguracji.

# Działanie 

Poszczególne elementy strony zostały podzielone między kompatybilne komponenty w oddzielnych plikach naszego projektu w folderze /ezn-react-theme-code/. Strona pobiera dane przez API z WordPressa, co powoduje, że przez domyślny CMS WordPressa nadal można wprowadzać zmiany, które pojawią się na stronie.

Treść podstron utworzonych na WordPressie również pobierana jest przez API i renderowana zgodnie ze stylami componentu SubpagesView.tsx. 

Gdy ścieżka została podana niepoprawnie obsługa błędu odbywa się w pliku NotFoundSite.tsx i wyświetla odpowiedni komunikat dla użytkownika. 

# Opis

Nasz projekt strony powstał z myślą o nowych uczniach, chcących rozpocząć naukę w naszej szkole. Projekt strony przystosowany jest do szybkiego i precyzyjnego pozyskania informacji o szkole oraz rekrutacji do niej przez potencjalnego kandydata. Strona przystosowana jest do szybkiego pozyskania informacji przez kandydata oraz rodzica, którzy potrzebują dokładnych i posegregowanych informacji. Przyciski CTA (call to action) w nawigacji oraz w poszczególnych sekcjach umożliwiają szybkie przemieszczanie się po stronie oraz pozyskanie potrzebnych informacji. 

Dodatkowo strona przystosowana jest do użytkowania przez członków naszej społeczności - intuicyjna nawigacja pozwala płynnie przechodzić między podstronami, a zamieszczona na stronie głównej sekcja "Aktualności" pozwala być na bieżąco ze szkolnymi wydarzeniami. 

Layout naszej strony został przygotowany na wzór strony internetowej nowoczesnego technikum oferującego przyszłościowe ścieżki rozwoju zawodowego. Nowoczesny design i spójny wygląd strony, a także przemyślana architektura UX powodują, że korzystanie z naszej strony jest proste, intuicyjne oraz cieszy oko. 

# Zgodność z wymaganiami konkursowymi

Strona jest zgodna z wymaganiami konkursowymi. Spójność z logotypem oraz kolorystyką naszej szkoły został zachowany, mapa strony została odwzorowana, responsywność - dopasowanie do każdej rozdzielczości ekranu, optymalizacja pod kątem SEO oraz została opublikowana na darmowym hostingu w postaci kompatybilnego motywu do WordPressa pod linkiem: https://stronaezn.page.gd/. 

# Technologie 

Budując nasz projekt skupiliśmy się na wykorzystaniu najnowszych technologii, które pozwalają na dalszy rozwój projektu strony w przyszłości, zachowanie dobrych praktyk pisania kodu oraz kompatybilność z aktualnie używanym przez naszą szkołę systemem zarządzania treścią.

## Środowiska
- Node.js
- TanStack Router
- React
- TailwindCSS
- WordPress
## Języki programowania
- TypeScript
- JavaScript

# Dalszy rozwój projektu

W dalszej fazie rozwoju projektu planujemy dodanie funkcjonalności, które umożliwią szerszą integrację strony z rozwiązaniami oferowanymi przez WordPressa. 
