var dataMendTable = [["H" , 1, [1], 1.00794, "1s1", "Водород", "s", 1, "1A"], 
["He", 2, [2], 4.002602, "1s2", "Гелий", "s", 1, "8A"], 
["Li", 3, [1, 2], 6.941, "2s1", "Литий", "s", 2, "1A"], 
["Be", 4, [2, 2], 9.01218, "2s2", "Бериллий", "s", 2, "2A"], 
["B", 5, [3, 2], 10.811, "2s22p1", "Бор", "p", 2, "3A"], 
["C", 6, [4, 2], 12.011, "2s22p2", "Углерод", "p", 2, "4A"], 
["N", 7, [5, 2], 14.0067, "2s22p3", "Азот", "p", 2, "5A"], 
["O", 8, [6, 2], 15.9994, "2s22p4", "Кислород", "p", 2, "6A"], 
["F", 9, [7, 2], 18.998403, "2s22p5", "Фтор", "p", 2, "7A"], 
["Ne", 10, [8, 2], 20.179, "2s22p6", "Неон", "p", 2, "8A"], 
["Na", 11, [1, 8, 2], 22.98977, "3s1", "Натрий", "s", 3, "1A"], 
["Mg", 12, [2, 8, 2], 24.305, "3s2", "Магний", "s", 3, "2A"], 
["Al", 13, [3, 8, 2], 26.98154, "3s23p1", "Алюминий", "p", 3, "3A"], 
["Si", 14, [4, 8, 2], 28.0855, "3s23p2", "Кремний", "p", 3, "4A"], 
["P", 15, [5, 8, 2], 30.97376, "3s23p3", "Фосфор", "p", 3, "5A"], 
["S", 16, [6, 8, 2], 32.066, "3s23p4", "Сера", "p", 3, "6A"], 
["Cl", 17, [7, 8, 2], 35.453, "3s23p5", "Хлор", "p", 3, "7A"], 
["Ar", 18, [8, 8, 2], 39.948, "3s23p6", "Аргон", "p", 3, "8A"], 
["K", 19, [1, 8, 8, 2], 39.0983, "4s1", "Калий", "s", 4, "1A"], 
["Ca", 20, [2, 8, 8, 2], 40.078, "4s2", "Кальций", "s", 4, "2A"], 
["Sc", 21, [2, 9, 8, 2], 44.95591, "3d14s2", "Скандий", "d", 4, "3B"], 
["Ti", 22, [2, 10, 8, 2], 47.88, "3d24s2", "Титан", "d", 4, "4B"], 
["V", 23, [2, 11, 8, 2], 50.9415, "3d34s2", "Ванадий", "d", 4, "5B"], 
["Cr", 24, [1, 13, 8, 2], 51.9961, "3d54s1", "Хром", "d", 4, "6B"], 
["Mn", 25, [2, 13, 8, 2], 54.9380, "3d54s2", "Марганец", "d", 4, "7B"], 
["Fe", 26, [2, 14, 8, 2], 55.847, "3d64s2", "Железо", "d", 4, "8B"], 
["Co", 27, [2, 15, 8, 2], 58.9332, "3d74s2", "Кобальт", "d", 4, "8B"], 
["Ni", 28, [2, 16, 8, 2], 58.69, "3d84s2", "Никель", "d", 4, "8B"], 
["Cu", 29, [1, 18, 8, 2], 63.546, "3d104s1", "Медь", "d", 4, "1B"], 
["Zn", 30, [2, 18, 8, 2], 65.39, "3d104s2", "Цинк", "d", 4, "2B"], 
["Ga", 31, [3, 18, 8, 2], 69.723, "4s24p1", "Галлий", "p", 4, "3A"], 
["Ge", 32, [4, 18, 8, 2], 72.59, "4s24p2", "Германий", "p", 4, "4A"], 
["As", 33, [5, 18, 8, 2], 74.9216, "4s24p3", "Мышьяк", "p", 4, "5A"], 
["Se", 34, [6, 18, 8, 2], 78.96, "4s24p4", "Селен", "p", 4, "6A"], 
["Br", 35, [7, 18, 8, 2], 79.904, "4s24p5", "Бром", "p", 4, "7A"], 
["Kr", 36, [8, 18, 8, 2], 83.80, "4s24p6", "Криптон", "p", 4, "8A"], 
["Rb", 37, [1, 8, 18, 8, 2], 85.4678, "5s1", "Рубидий", "s", 5, "1A"], 
["Sr", 38, [2, 8, 18, 8, 2], 87, 62, "5s2", "Стронций", "s", 5, "2A"], 
["Y", 39, [2, 9, 18, 8, 2], 88.9059, "4d15s2", "Иттрий", "d", 5, "3B"], 
["Zr", 40, [2, 10, 18, 8, 2], 91.224, "4d25s2", "Цирконий", "d", 5, "4B"], 
["Nb", 41, [1, 12, 18, 8, 2], 92.9064, "4d45s1", "Ниобий", "d", 5, "5B"], 
["Mo", 42, [1, 13, 18, 8, 2], 95.94, "4d55s1", "Молибден", "d", 5, "6B"], 
["Tc", 43, [2, 13, 18, 8, 2], 97.9072, "4d55s2", "Технеций", "d", 5, "7B"], 
["Ru", 44, [1, 15, 18, 8, 2], 101.07, "4d75s1", "Рутений", "d", 5, "8B"], 
["Rh", 45, [1, 16, 18, 8, 2], 102.9055, "4d85s1", "Родий", "d", 5, "8B"], 
["Pd", 46, [0, 18, 18, 8, 2], 106.42, "4d105s0", "Палладий", "d", 5, "8B"], 
["Ag", 47, [1, 18, 18, 8, 2], 107.8682, "4d105s1", "Серебро", "d", 5, "1B"], 
["Cd", 48 , [2, 18, 18, 8, 2], 112.41, "4d105s2", "Кадмий", "d", 5, "2B"], 
["In", 49 , [3, 18, 18, 8, 2], 114.82, "5s25p1", "Индий", "p", 5, "3A"], 
["Sn", 50 , [4, 18, 18, 8, 2], 118.710, "5s25p2", "Олово", "p", 5, "4A"], 
["Sb", 51 , [5, 18, 18, 8, 2], 121.75, "5s25p3", "Сурьма", "p", 5, "5A"], 
["Te", 52 , [6, 18, 18, 8, 2], 127.60, "5s25p4", "Теллур", "p", 5, "6A"], 
["I", 53 , [7, 18, 18, 8, 2], 126.9045, "5s25p5", "Иод", "p", 5, "7A"], 
["Xe", 54 , [8, 18, 18, 8, 2], 131.29, "5s25p6", "Ксенон", "p", 5, "8A"], 
["Cs", 55 , [1, 8, 18, 18, 8, 2], 132.9054, "6s1", "Цезий", "s", 6, "1A"], 
["Ba", 56 , [2, 8, 18, 18, 8, 2], 137.33, "6s2", "Барий", "s", 6, "2A"], 
["La", 57, [2, 9, 18, 18, 8, 2], 138.9055, "5d16s2", "Лантан", "d", 6, "3B"], 
["Hf", 72, [2, 10, 32, 18, 8, 2], 178.49, "5d26s2", "Гафний", "d", 6, "4B"], 
["Ta", 73, [2, 11, 32, 18, 8, 2], 180.9479, "5d36s2", "Тантал", "d", 6, "5B"], 
["W", 74, [2, 12, 32, 18, 8, 2], 183.85, "5d46s2", "Вольфрам", "d", 6, "6B"], 
["Re", 75, [2, 13, 32, 18, 8, 2], 186.207, "5d56s2", "Рений", "d", 6, "7B"], 
["Os", 76, [2, 14, 32, 18, 8, 2], 190.2, "5d66s2", "Осмий", "d", 6, "8B"], 
["Ir", 77, [2, 15, 32, 18, 8, 2], 192.22, "5d76s2", "Иридий", "d", 6, "8B"], 
["Pt", 78, [1, 17, 32, 18, 8, 2], 195.08, "5d96s1", "Платина", "d", 6, "8B"], 
["Au", 79, [1, 18, 32, 18, 8, 2], 196.9665, "5d106s1", "Золото", "d", 6, "1B"], 
["Hg", 80, [2, 18, 32, 18, 8, 2], 200.59, "5d106s2", "Ртуть", "d", 6, "2B"], 
["Tl", 81, [3, 18, 32, 18, 18, 8, 2], 204.3831, "6s26p1", "Таллий", "p", 6, "3A"], 
["Pb", 82, [4, 18, 32, 18, 18, 8, 2], 207.2, "6s26p2", "Свинец", "p", 6, "4A"], 
["Bi", 83, [5, 18, 32, 18, 18, 8, 2], 208.9804, "6s26p3", "Висмут", "p", 6, "5A"], 
["Po", 84, [6, 18, 32, 18, 18, 8, 2], 208.9824, "6s26p4", "Полоний", "p", 6, "6A"], 
["At", 85, [7, 18, 32, 18, 18, 8, 2], 209.9871, "6s26p5", "Астат", "p", 6, "7A"], 
["Rn", 86, [8, 18, 32, 18, 18, 8, 2], 222.0176, "6s26p6", "Радон", "p", 6, "8A"], 
["Fr", 87, [1, 8, 18, 32, 18, 18, 8, 2], 223.0197, "7s1", "Франций", "s", 7, "1A"], 
["Ra", 88, [2, 8, 18, 32, 18, 18, 8, 2], 226.0254, "7s2", "Радий", "s", 7, "2A"], 
["Ac", 89, [2, 8, 18, 32, 18, 8, 2], 227.0278, "6d17s2", "Актиний", "d", 7, "3B"], 
["Rf", 104, [2, 10, 32, 32, 18, 8, 2], 261, "6d27s2", "Резерфордий", "d", 7, "4B"], 
["Db", 105, [2, 11, 32, 32, 18, 8, 2], 262, "6d37s2", "Дубний", "d", 7, "5B"], 
["Sg", 106, [2, 12, 32, 32, 18, 8, 2], 263, "6d47s2", "Сиборгий", "d", 7, "6B"], 
["Bh", 107, [2, 13, 32, 32, 18, 8, 2], 262, "6d57s2", "Борий", "d", 7, "7B"], 
["Hs", 108, [2, 14, 32, 32, 18, 8, 2], 265, "6d67s2", "Хассий", "d", 7, "8B"], 
["Mt", 109, [2, 15, 32, 32, 18, 8, 2], 266, "6d77s2", "Мейтнерий", "d", 7, "8B"], 
["Ds", 110, [1, 17, 32, 32, 18, 8, 2], 281, "5f146d97s1", "Дармштадтий", "d", 7, "8B"], 
["Rg", 111, [1, 18, 32, 32, 18, 8, 2], 281, "5f146d107s1", "Рентгений", "d", 7, "1B"], 
["Cn", 112, [], 285, "5f146d107s2", "Коперниций", "d", 7, "2B"], 
["Nh", 113, [], 286, "5f146d107s27p1", "Нихоний", "p", 7, "3A"], 
["Fl", 114, [], 289, "5f146d107s27p2", "Флеровий", "p", 7, "4A"], 
["Mc", 115, [], 289, "5f146d107s27p3", "Московий", "p", 7, "5A"], 
["Lv", 116, [6, 18, 32, 32, 18, 8, 2], 293, "5f146d107s27p4", "Ливерморий", "p", 7, "6A"], 
["Ce", 58, [2, 9, 19, 18, 8, 2], 140.12, "4f15d16s2", "Церий", "f", 5, "3B"], 
["Pr", 59, [2, 8, 21, 18, 8, 2], 140.9077, "4f36s2", "Празеодим", "f", 5, "3B"], 
["Nd", 60, [2, 8, 22, 18, 8, 2], 144.24, "4f46s2", "Неодим", "f", 5, "3B"], 
["Pm", 61, [2, 8, 23, 18, 8, 2], 144.9128, "4f56s2", "Прометий", "f", 5, "3B"], 
["Sm", 62, [2, 8, 24, 18, 8, 2], 150.36, "4f66s2", "Самарий", "f", 5, "3B"], 
["Eu", 63, [2, 8, 25, 18, 8, 2], 151.96, "4f76s2", "Европий", "f", 5, "3B"], 
["Gd", 64, [2, 9, 25, 18, 8, 2], 157.25, "4f75d16s2", "Гадолиний", "f", 5, "3B"], 
["Tb", 65, [2, 8, 27, 18, 8, 2], 159.9254, "4f96s2", "Тербий", "f", 5, "3B"], 
["Dy", 66, [2, 8, 28, 18, 8, 2], 162.50, "4f106s2", "Диспрозий", "f", 5, "3B"], 
["Ho", 67, [2, 8, 29, 18, 8, 2], 164.9304, "4f116s2", "Гольмий", "f", 5, "3B"], 
["Er", 68, [2, 8, 30, 18, 8, 2], 167.26, "4f126s2", "Эрбий", "f", 5, "3B"], 
["Tm", 69, [2, 8, 31, 18, 8, 2], 168.9342, "4f136s2", "Тулий", "f", 5, "3B"], 
["Yb", 70, [2, 8, 32, 18, 8, 2], 173.04, "4f146s2", "Иттербий", "f", 5, "3B"], 
["Lu", 71, [2, 9, 32, 18, 8, 2], 174.967, "4f145d16s2", "Лютеций", "f", 5, "3B"], 
["Th", 90, [2, 10, 18, 32, 18, 8, 2], 232.0381, "6d27s2", "Торий", "f", 6, "3B"], 
["Pa", 91, [2, 9, 20, 32, 18, 8, 2], 231.0359, "5f26d17s2", "Протактиний", "f", 6, "3B"],
["U", 92, [2, 9, 21, 32, 18, 8, 2], 238.0289, "5f36d17s2", "Уран", "f", "3B"], 
["Np", 93, [2, 9, 22, 32, 18, 8, 2], 237.0482, "5f46d17s2", "Нептуний", "f", 6, "3B"], 
["Pu", 94, [2, 8, 24, 32, 18, 8, 2], 244.0642, "5f67s2", "Плутоний", "f", 6, "3B"], 
["Am", 95, [2, 8, 25, 32, 18, 8, 2], 243.0614, "5f77s2", "Амерций", "f", 6, "3B"], 
["Cm", 96, [2, 9, 25, 32, 18, 8, 2], 247.0703, "5f7d617s2", "Кюрий", "f", 6, "3B"], 
["Bk", 97, [2, 9, 26, 32, 18, 8, 2], 247.0703, "5f8d617s2", "Берклий", "f", 6, "3B"], 
["Cf", 98, [2, 8, 28, 32, 18, 8, 2], 251.0796, "5f107s2", "Калифорний", "f", 6, "3B"], 
["Es", 99, [2, 8, 29, 32, 18, 8, 2], 252.0828, "5f117s2", "Эйнштейний", "f", 6, "3B"], 
["Fm", 100, [2, 8, 30, 32, 18, 8, 2], 257.0951, "5f127s2", "Фермий", "f", 6, "3B"], 
["Md", 101, [2, 8, 31, 32, 18, 8, 2], 258.0986, "5f137s2", "Менделевий", "f", 6, "3B"],
["No", 102, [], 259, "", "Нобелий", "f", 6, "3B"],
["Lr", 103, [], 262, "", "Лоуренсий", "f", 6, "3B"]];

