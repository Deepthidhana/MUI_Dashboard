import { SearchInput, SearchSection } from './search';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar() {
  return (
    <SearchSection>
      <SearchIcon />
      <SearchInput placeholder='Search...'/>
    </SearchSection>
  );
}