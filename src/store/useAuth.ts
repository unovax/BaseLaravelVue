import { User, defaultUser } from '@/types/User';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuth = defineStore('auth', () => {
  const user = ref<User>(
    JSON.parse(localStorage.getItem('user') || JSON.stringify(defaultUser))
  );

  const setUser = (newUser : User) => {
    user.value = newUser;
    //save user to local storage
    localStorage.setItem('user', JSON.stringify(newUser));
  }
  const clearUser = () => {
    user.value = defaultUser;
    //remove user from local storage
    localStorage.removeItem('user');
  }
  return { user, setUser, clearUser }
})