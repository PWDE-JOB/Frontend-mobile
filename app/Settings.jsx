// Settings.jsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch, Pressable } from 'react-native';
import styles from '../styles/settings.styles';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <Pressable onPress={() => router.push('/updateProf')} style={({ pressed }) => [styles.settingItem, pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 }]}>  
             <Text style={styles.settingText}>Edit Profile</Text>
             </Pressable>
           
          

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.settingItemRow}>
            <Text style={styles.settingText}>Enable Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>

          <View style={styles.settingItemRow}>
            <Text style={styles.settingText}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Help Center</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>About</Text>
          </TouchableOpacity>

          <Pressable onPress={() => router.push('/accFeature')} style={({ pressed }) => [styles.settingItem, pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 }]}> 
            <Text style={styles.settingText}>Accessibility Features</Text>
        </Pressable>
        </View>
        
        <View style={styles.section}>
          <Pressable onPress={() => router.push('/LoginPage')} style={({ pressed }) => [styles.logoutButton, pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 }]}> 
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>


      </ScrollView>
    </View>
  );
};

export default Settings;
