import { useEffect,  useState, useRef } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import useSearchStore from '@/app/store/searchStore';
import { QueryKeys, restFetcher } from '@/app/_provider/queryClient';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const setQuery = useSearchStore((state) => state.setQuery);
  const setResults = useSearchStore((state) => state.setResults);
  const { data, refetch } = useQuery({
    queryKey: [QueryKeys.SEARCH, inputValue],
    queryFn: () => restFetcher({ path: 'search', method: 'GET', params: { q: inputValue } }),
    enabled: false,
  });

  useEffect(() => {
    if (data) {
      setResults(data);
    }
  }, [data, setResults]);

  const debouncedFetch = useRef(
    debounce((value) => {
      setQuery(value);
      refetch();
    }, 500)
  ).current;

  useEffect(() => {
    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9가-힣]*$/; 
    if (regex.test(value)) {
      setInputValue(value);
      debouncedFetch(value);
    } else {
      alert('입력값은 알파벳, 숫자, 한글로만 구성되어야 합니다.');
    }
  };
  const handleSearch = () => {
    setQuery(inputValue);
    refetch();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <TextField
        value={inputValue}
        onChange={handleChange}
        placeholder="검색어를 입력해주세요"
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;