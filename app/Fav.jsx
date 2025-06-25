import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import styles from '../styles/Fav.styles';
import { useRouter } from 'expo-router';

// Static list of favorite jobs (you can later replace this with dynamic API data)
const favoriteJobs = [
  {
    id: 1,
    company: 'Tech Corp',
    image: require('../assets/PWD.png'),
    skills: ['React', 'Node.js'],
    info: 'Frontend Developer role available for immediate hire.',
  },
  {
    id: 2,
    company: 'Cloudify',
    image: require('../assets/PWD.png'),
    skills: ['AWS', 'SQL'],
    info: 'Looking for a Cloud Engineer with SQL experience.',
  },
];

const Fav = () => {
  const router = useRouter();

  // 📌 Placeholder: Fetch user's favorite jobs from API
  /*
  useEffect(() => {
    fetch('https://your-api.com/favorites')
      .then(response => response.json())
      .then(data => setFavoriteJobs(data))
      .catch(err => console.error(err));
  }, []);
  */

  return (
    <View style={styles.container}>
          <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                      <Text style={styles.backText}>← Back</Text>
                    </TouchableOpacity>
                  <Text style={styles.headerText}>LIKED JOBS</Text>

    </View>
                



      {/* List of Favorite Job Cards */}
      <ScrollView contentContainerStyle={styles.list}>
        {favoriteJobs.map((job) => (
          <View key={job.id} style={styles.card}>
            <Image source={job.image} style={styles.image} />
            <Text style={styles.companyName}>{job.company}</Text>

            {/* Skills Display */}
            <View style={styles.skillContainer}>
              {job.skills.map((skill, index) => (
                <View key={index} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>

            {/* Job Info */}
            <Text style={styles.infoText}>{job.info}</Text>

            {/* Remove from Favorites Button */}
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove from Favorites</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Fav;
