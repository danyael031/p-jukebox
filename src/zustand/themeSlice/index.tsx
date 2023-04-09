/*
* Copyright 2023 Dan Yael Sajarópulos Verdugo
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { StateCreator } from 'zustand';
import { Theme } from './types';
import { AppState } from '../types'
import { ThemeState } from './types';

export const createThemeSlice: StateCreator<
  AppState,
  [],
  [],
  ThemeState
> = (set) => ({
  currentTheme: 'nord',
  changeTheme: (theme: Theme) => {
    set({currentTheme: theme})
  }
})