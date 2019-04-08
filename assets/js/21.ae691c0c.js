(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{217:function(e,t,r){"use strict";r.r(t);var n=r(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("前面的章節我們提到Select的使用方式，在知道了它神奇的運作方式及效果後，是不是加深了你對其運作方式的好奇心，其實它的運作方式比我們想的都還要單純，現在讓我們來場精彩的探險吧。")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("原碼探險的章節是以"),r("a",{attrs:{href:"https://github.com/dotnet/corefx",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet/corefx"),r("OutboundLink")],1),e._v("為基礎來做解說的，一般來說每次會參考兩個檔案:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("在原碼探險的章節中主要會有下面兩個主題:")]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("我們會由兩個面相出發，先以觀察原始碼來讓自己對於語法的運作有個初步的概念，再來學習測試案例來強化觀念及增加在原碼分析中沒有注意到的細節概念。")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._m(17),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("從這段程式中我們可以觀察到一些有趣的事實:")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._m(29),e._v(" "),r("p",[e._v("我們剛剛自己走了一輪原碼，現在來看看別人是怎麼去觀察程式碼的，如果說自己去觀察程式碼是自己在闖關，那看測試案例就像在看精彩重播一樣，會讓人學到更多的技巧，我會挑幾個覺得有趣的案例來說明。")]),e._v(" "),e._m(30),e._v(" "),e._m(31),e._m(32),e._v(" "),e._m(33),e._v(" "),r("p",[e._v("在建立委派方法時，Lambda(或是匿名方法)會擷取在方法中有使用到的外部變數(傳址)，所以可以在Lambda中使用這個外部變數，且外部程式也可以取得在Lambda中變動的變數值。")]),e._v(" "),e._m(34),e._v(" "),e._m(35),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._m(45),e._v(" "),e._m(46),e._m(47),e._v(" "),e._m(48),e._v(" "),r("p",[e._v("我們自己一步一步的了解原始碼，經由對原始碼的初步了解去觀察測試案例，在觀看時又進一步的加深對原始碼的了解，有個相輔相成的效果，接下來我們都會依照這樣的方式去講解其他的LINQ方法。")]),e._v(" "),e._m(49),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/dotnet/corefx",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub-dotnet/corefx"),r("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"select的原碼探險"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select的原碼探險","aria-hidden":"true"}},[this._v("#")]),this._v(" Select的原碼探險")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"dotnet-corefx使用說明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dotnet-corefx使用說明","aria-hidden":"true"}},[this._v("#")]),this._v(" dotnet/corefx使用說明")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("em",[this._v("corefx/src/System.Linq/src/System/Linq/{語法名稱}.cs")]),this._v(": 語法的原始碼檔案")]),this._v(" "),t("li",[t("em",[this._v("corefx/src/System.Linq/tests/{語法名稱}Tests.cs")]),this._v(": 語法的測試案例")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"文章結構"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章結構","aria-hidden":"true"}},[this._v("#")]),this._v(" 文章結構")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("原始碼分析: 語法的原始碼來做觀察及學習")]),this._v(" "),t("li",[this._v("測試案例賞析: 從語法的測試案例挑幾個比較特別的來做介紹")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"原始碼分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始碼分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 原始碼分析")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Source Code: https://github.com/dotnet/corefx/blob/master/src/System.Linq/src/System/Linq/Select.cs")]),this._v(" "),t("li",[this._v("Public Method")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("public static IEnumerable<TResult> Select<TSource, TResult>(\n    this IEnumerable<TSource> source, Func<TSource, TResult> selector);\n\npublic static IEnumerable<TResult> Select<TSource, TResult>(\n    this IEnumerable<TSource> source, Func<TSource, int, TResult> selector);\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("我們先來看"),t("code",[this._v("selector")]),this._v("有"),t("code",[this._v("Index")]),this._v("參數方法的原始碼:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("public static IEnumerable<TResult> Select<TSource, TResult>(\n    this IEnumerable<TSource> source, Func<TSource, int, TResult> selector)\n{\n    if (source == null)\n    {\n        throw Error.ArgumentNull(nameof(source));\n    }\n\n    if (selector == null)\n    {\n        throw Error.ArgumentNull(nameof(selector));\n    }\n\n    return SelectIterator(source, selector);\n}\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("在"),r("code",[e._v("source")]),e._v("或是"),r("code",[e._v("selector")]),e._v("傳入"),r("code",[e._v("null")]),e._v("時會丟出"),r("code",[e._v("ArgumentNull")]),e._v("的Exception")]),e._v(" "),r("li",[e._v("回傳值為"),r("code",[e._v("SelectIterator")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("是不是很單純呢? 基本上這裡只有判斷傳入參數的合法性，確定合法後就丟給"),t("code",[this._v("SelectIterator")]),this._v("，接著來看一下"),t("code",[this._v("SelectIterator")]),this._v("的實作:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("private static IEnumerable<TResult> SelectIterator<TSource, TResult>(\n    IEnumerable<TSource> source, Func<TSource, int, TResult> selector)\n{\n    int index = -1;\n    foreach (TSource element in source)\n    {\n        checked\n        {\n            index++;\n        }\n\n        yield return selector(element, index);\n    }\n}\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("這是個"),r("code",[e._v("yield")]),e._v("區塊，實作方式為"),r("strong",[e._v("Iterator Pattern")]),e._v("，回傳的資料是"),r("code",[e._v("IEnumerable")]),e._v("型別的集合")]),e._v(" "),r("li",[e._v("每一個元素會較前一個元素的"),r("code",[e._v("index")]),e._v("多加"),r("strong",[e._v("1")])]),e._v(" "),r("li",[e._v("每個元素的資料會是執行完委派方法"),r("code",[e._v("selector")]),e._v("後的結果")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("到這裡就是有"),r("code",[e._v("index")]),e._v("的Select全部的原始碼了，實作主要是基於"),r("code",[e._v("yield")]),e._v("的應用，"),r("code",[e._v("yield")]),e._v("會擴展為"),r("strong",[e._v("Iterator Pattern")]),e._v("，在巡覽時藉由叫用"),r("code",[e._v("MoveNext()")]),e._v("來對"),r("strong",[e._v("index加1")]),e._v("以及"),r("strong",[e._v("將"),r("code",[e._v("Selector")]),e._v("執行後的值給予"),r("code",[e._v("Cuurent")])]),e._v("，也因為是"),r("code",[e._v("Iterator Pattern")]),e._v("所以可以知道有"),r("code",[e._v("index")]),e._v("的Select確定是擁有延遲執行的功能的。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("接著我們來觀察沒有"),t("code",[this._v("index")]),this._v("的Select原始碼如下:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("public static IEnumerable<TResult> Select<TSource, TResult>(\n    this IEnumerable<TSource> source, Func<TSource, TResult> selector)\n{\n    if (source == null)\n    {\n        throw Error.ArgumentNull(nameof(source));\n    }\n\n    if (selector == null)\n    {\n        throw Error.ArgumentNull(nameof(selector));\n    }\n\n    if (source is Iterator<TSource> iterator)\n    {\n        return iterator.Select(selector);\n    }\n\n    if (source is IList<TSource> ilist)\n    {\n        if (source is TSource[] array)\n        {\n            return array.Length == 0 ?\n                EmptyPartition<TResult>.Instance :\n                new SelectArrayIterator<TSource, TResult>(array, selector);\n        }\n\n        if (source is List<TSource> list)\n        {\n            return new SelectListIterator<TSource, TResult>(list, selector);\n        }\n\n        return new SelectIListIterator<TSource, TResult>(ilist, selector);\n    }\n\n    if (source is IPartition<TSource> partition)\n    {\n        return partition is EmptyPartition<TSource>\n            ? EmptyPartition<TResult>.Instance\n            : new SelectIPartitionIterator<TSource, TResult>(partition, selector);\n    }\n\n    return new SelectEnumerableIterator<TSource, TResult>(source, selector);\n}\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("在"),r("code",[e._v("source")]),e._v("或是"),r("code",[e._v("selector")]),e._v("傳入"),r("code",[e._v("null")]),e._v("時會丟出"),r("code",[e._v("ArgumentNull")]),e._v("的Exception")]),e._v(" "),r("li",[e._v("判斷傳入值的型別，分別實作不同的"),r("code",[e._v("Iterator")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("之前的有"),r("code",[e._v("index")]),e._v("的Select因為是借助"),r("code",[e._v("yield")]),e._v("來實作，所以我們並不清楚它實作"),r("code",[e._v("Iterator")]),e._v("的細節，但從這個Select的原始碼我們就可以清楚的知道實作的"),r("code",[e._v("Iterator")]),e._v("長什麼樣子了。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("code",[e._v("IList")]),e._v("、"),r("code",[e._v("Array")]),e._v("、"),r("code",[e._v("List")]),e._v("雖然是"),r("code",[e._v("IEnumerable")]),e._v("但並不是"),r("code",[e._v("Iterator")])]),e._v(" "),r("li",[e._v("所有型別在查詢過程中都會被轉為"),r("code",[e._v("Iterator")])]),e._v(" "),r("li",[e._v("叫用"),r("code",[e._v("Select()")]),e._v("後如果再接一個"),r("code",[e._v("Select()")]),e._v("會因為第一個"),r("code",[e._v("Select")]),e._v("已經是"),r("code",[e._v("Iterator")]),e._v("了而直接叫用"),r("code",[e._v("iterator.Select(selector)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("接下來觀察"),t("code",[this._v("Iterator")]),this._v("的方法定義:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Source Code: https://github.com/dotnet/corefx/blob/master/src/System.Linq/src/System/Linq/Iterator.cs")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("internal abstract class Iterator<TSource> : IEnumerable<TSource>, IEnumerator<TSource>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("同時實作了"),t("code",[this._v("IEnumerable")]),this._v("跟"),t("code",[this._v("IEnumerator")]),this._v("，這也是為什麼我們叫用了LINQ方法後都會變為"),t("code",[this._v("IEnumerable")]),this._v("的原因。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("往下看到"),t("code",[this._v("GetEnumerator()")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("public IEnumerator<TSource> GetEnumerator()\n{\n    Iterator<TSource> enumerator = \n        _state == 0 && _threadId == Environment.CurrentManagedThreadId ? this : Clone();\n    enumerator._state = 1;\n    return enumerator;\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("除了叫用第一次"),t("code",[this._v("GetEnumerator()")]),this._v("所取得的物件為原本的物件外，其他都是複製出新的實體")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("最後我們來說說"),t("code",[this._v("IPartition")]),this._v("，繼承了這個介面就是要實作取得部分集合的方法，IPartition的方法定義在下面:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("// 忽略前{count}個元素\nIPartition<TElement> Skip(int count);\n\n// 拿取前{count}個元素\nIPartition<TElement> Take(int count);\n\n// 取得特定{index}的元素\nTElement TryGetElementAt(int index, out bool found);\n\n// 取得第一個元素\nTElement TryGetFirst(out bool found);\n\n// 取得最後一個元素\nTElement TryGetLast(out bool found);\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"測試案例分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#測試案例分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 測試案例分析")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Select_SourceIsAnArray_ExecutionIsDeferred")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[Fact]\npublic void Select_SourceIsAnArray_ExecutionIsDeferred()\n{\n    bool funcCalled = false;\n    Func<int>[] source = new Func<int>[] { () => { funcCalled = true; return 1; } };\n\n    IEnumerable<int> query = source.Select(d => d());\n    Assert.False(funcCalled);\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("這個案例的原由("),t("strong",[this._v("延遲執行")]),this._v(")相信大家應該都已經清楚了，我自己在閱覽的時候覺得"),t("code",[this._v("funcCalled")]),this._v("這個參數值得一提，就把這案例加進來討論。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("大家覺得Lambda陳述式中吃得到"),t("code",[this._v("funcCalled")]),this._v("嗎? 看碼說故事: 可以!!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("Select_SourceListGetsModifiedDuringIteration_ExceptionIsPropagated")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[Fact]\npublic void Select_SourceListGetsModifiedDuringIteration_ExceptionIsPropagated()\n{\n    List<int> source = new List<int>() { 1, 2, 3, 4, 5 };\n    Func<int, int> selector = i => i + 1;\n\n    var result = source.Select(selector);\n    var enumerator = result.GetEnumerator();\n\n    Assert.True(enumerator.MoveNext());\n    Assert.Equal(2 /* 1 + 1 */, enumerator.Current);\n\n    source.Add(6);  // 新增元素會使Iterator拋錯誤\n    Assert.Throws<InvalidOperationException>(() => enumerator.MoveNext());\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在叫用"),t("code",[this._v("foreach")]),this._v("或是"),t("code",[this._v("GetEnumerator()")]),this._v("做巡覽時不能對集合作增減元素的動作，否則會拋"),t("code",[this._v("InvalidOperationException")]),this._v("例外。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("Select_GetEnumeratorCalledTwice_DifferentInstancesReturned")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[Fact]\npublic void Select_GetEnumeratorCalledTwice_DifferentInstancesReturned()\n{\n    int[] source = new[] { 1, 2, 3, 4, 5 };\n    var query = source.Select(i => i + 1);\n\n    var enumerator1 = query.GetEnumerator();\n    var enumerator2 = query.GetEnumerator();\n\n    Assert.Same(query, enumerator1);    // 第一次的GetEnumerator()會是原本的\n    Assert.NotSame(enumerator1, enumerator2);   // 第二次或更多會以Clone()複製實體化\n\n    enumerator1.Dispose();\n    enumerator2.Dispose();\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("這個測試跟我們剛剛觀察"),t("code",[this._v("Iterator.GetEnumerator()")]),this._v("時得到的結論互相呼應，當你Call兩次以上的"),t("code",[this._v("GetEnumerator()")]),this._v("時就不在是原本的實體了。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("ForcedToEnumeratorDoesntEnumerateIndexed")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[Fact]\npublic void ForcedToEnumeratorDoesntEnumerateIndexed()\n{\n    var iterator = NumberRangeGuaranteedNotCollectionType(0, 3).Select((e, i) => i);\n    // Don't insist on this behaviour, but check it's correct if it happens\n    var en = iterator as IEnumerator<int>;\n    Assert.False(en != null && en.MoveNext());\n}\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("雖然"),r("strong",[e._v("Iterator")]),e._v("同時實作了"),r("code",[e._v("IEnumerable")]),e._v("跟"),r("code",[e._v("IEnumerator")]),e._v("，但在還沒叫用"),r("code",[e._v("GetEnumerator()")]),e._v("前是不能做巡覽的，原因為"),r("code",[e._v("_state")]),e._v("(控制目前巡覽的狀態(GetEnumerator(): 1、Dispose(): -1))的值在是在"),r("code",[e._v("GetEnumerator()")]),e._v("中初始，沒有狀態碼"),r("code",[e._v("MoveNext()")]),e._v("會直接判定已經巡覽結束而回傳"),r("code",[e._v("false")]),e._v("。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"5"}},[t("li",[this._v("MoveNextAfterDispose\n這個測試案例有點長，大部分是測試資料，我們擷取主要的部份:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IEnumerable<int> result = equivalentSource.Select(i => i);\nusing (IEnumerator<int> e = result.GetEnumerator())\n{\n    while (e.MoveNext()) ; // Loop until we reach the end of the iterator, @ which pt it gets disposed.\n    Assert.False(e.MoveNext()); // MoveNext should not throw an exception after Dispose.\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("這是在測試在巡覽結束後再次叫用"),t("code",[this._v("MoveNext()")])]),this._v(" "),t("li",[this._v("巡覽結束時會去叫用"),t("code",[this._v("Dispose()")]),this._v("，程式如下:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("public virtual void Dispose()\n{\n    _current = default(TSource);\n    _state = -1;\n}\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("可以看到"),r("code",[e._v("Dispose()")]),e._v("只有將"),r("code",[e._v("_current")]),e._v("及"),r("code",[e._v("_state")]),e._v("調回初始值，所以再次叫用"),r("code",[e._v("MoveNext()")]),e._v("時就會"),r("code",[e._v("return false")]),e._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"結語"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#結語","aria-hidden":"true"}},[this._v("#")]),this._v(" 結語")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"參考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#參考","aria-hidden":"true"}},[this._v("#")]),this._v(" 參考")])}],!1,null,null,null);t.default=s.exports}}]);