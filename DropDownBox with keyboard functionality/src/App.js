import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown_new from "./Dropdown";
// import { useNavigate } from 'react'

const profiles = [
  { id: "1", name: "Allie Grater", link: "/somewhere/1" },
  { id: "2", name: "Aida Bugg", link: "/somewhere/2" },
  { id: "3", name: "Gabrielle", link: "/somewhere/3" },
  { id: "4", name: "Grace", link: "/somewhere/4" },
  { id: "5", name: "Hannah", link: "/somewhere/5" },
  { id: "6", name: "Heather", link: "/somewhere/6" },
  { id: "7", name: "John Doe", link: "/somewhere/7" },
  { id: "8", name: "Anne Teak", link: "/somewhere/8" },
  { id: "9", name: "Audie Yose", link: "/somewhere/9" },
  { id: "10", name: "Addie Minstra", link: "/somewhere/10" },
  { id: "11", name: "Anne Ortha", link: "/somewhere/11" },
];

const App = () => {
  // // const navigator = useNavigate()
  // const navigate = useNavigate();


  const [results, setResults] = useState({
    id: '',
    name: ''
  });
  const [selectedProfile, setSelectedProfile] = useState({
    id: '',
    name: ''
  });

  const handleChange = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(target.value.toLowerCase())
    );
    setResults(filteredValue);
  };

  useEffect(() => {
    console.log(selectedProfile);
    // navigate(selectedProfile.link)

  }, [selectedProfile])


  return (
    <Dropdown_new
      results={results}
      value={selectedProfile?.name}
      renderItem={(item) => <a href={item.link}>{item.name}</a>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />
  );
};

export default App;