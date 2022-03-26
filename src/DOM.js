/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        document.body.innerHTML += '<' + tag + '>' + content + '</' + tag + '>';
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    function AddBranch(element, levelBranch) {
        for (let i = 0; i < childrenCount; i++) {
            element.innerHTML += `<div class="item_${levelBranch}"/>`;
            if (levelBranch !== level) {
                const currentLevelList = document.querySelectorAll(
                    '.item_' + levelBranch,
                );
                AddBranch(
                    currentLevelList[currentLevelList.length - 1],
                    levelBranch + 1,
                );
            }
        }
    }
    document.body.innerHTML = `<div class="item_1"></div>`;
    AddBranch(document.querySelector('.item_1'), level - 1);

    return document.querySelector('.item_1');
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    generateTree(2, 3);
    let unit_collect = document.querySelectorAll('.item_2');
    for (let i = 0; i < unit_collect.length; i++) {
        unit_collect[i].outerHTML =
            '<section class="item_2">' +
            unit_collect[i].innerHTML +
            '</section>';
    }
    return document.querySelector('.item_1');
}
